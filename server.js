const cors        = require('cors');
const express     = require('express');
const next        = require('next');

const cookieSession = require('cookie-session');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser')

const passport      = require("passport");
const Auth0Strategy = require("passport-auth0");
const authRoutes    = require("./auth-routes");

const dev = process.env.NODE_ENV == 'development'

const app = next({dev, dir: './app'});
const handle = app.getRequestHandler();
const routes = require('./config/routes');
const apiRoutes = require('./config/routes/api-routes');
const mailRoutes = require('./config/routes/mailer');

const handler = routes.getRequestHandler(app);

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Accept', 'Content-Type', 'Authorization', 'Origin'],
  maxAge: 600
};

app.prepare()
   .then(() => {
      const server = express();
      server.use(cookieParser());
      server.use(bodyParser.json());

      const hours24 = 86400 * 1000;
      const sessionConfig = {
        secret: process.env.EXPRESS_SESSION_SECRET,
        key: 'usid',
        maxAge: hours24,
        resave: false,
        saveUninitialized: true
      };
      server.use(cookieSession(sessionConfig));

      const auth0Strategy = new Auth0Strategy(
        {
          domain: process.env.AUTH0_DOMAIN,
          clientID: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          callbackURL: process.env.AUTH0_CALLBACK_URL
        },
        function(accessToken, refreshToken, extraParams, profile, done) {
          if (profile !== undefined) profile.accessToken = accessToken;
          return done(null, profile);
        }
      );

      passport.use(auth0Strategy);
      passport.serializeUser((user, done) => done(null, user));
      passport.deserializeUser((user, done) => done(null, user));

      server.use(passport.initialize());
      server.use(passport.session());
      server.use(authRoutes);
      server.use(mailRoutes);

      const restrictAccess = (req, res, next) => {

        req.session.redirectTo = req.originalUrl; // save the users last url
        
        if (!req.isAuthenticated()) return res.redirect("/login");
        next();
      };

      // TODO - these will be moved out of app and to catalog service service
      server.all('/api/*', cors(corsOptions), apiRoutes);

      server.use('/collections', restrictAccess);
      server.use('/rack', restrictAccess);
      server.use('/account', restrictAccess);
      server.use(handler);

      server.all('/*', (req, res) => {
        return handle(req, res)
      });

      server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000')
      })
   })
   .catch((exception) => {
      console.error(exception.stack);
      process.exit(1);
   });