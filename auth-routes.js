const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/login", passport.authenticate("auth0", {
  audience: process.env.AUTH0_AUDIENCE,
  scope: "openid email profile"
}), (req, res) => res.redirect("/"));

router.get("/callback", (req, res, next) => {
  passport.authenticate("auth0",  (err, user) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");

    req.logIn(user, (err) => {
      if (err) return next(err);
      const session = res.req.session;
      res.cookie('token', session.passport.user.accessToken);
      res.redirect( (session && session.redirectTo)? session && session.redirectTo : "/");
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  res.clearCookie('token');
  req.logout();
  const {AUTH0_DOMAIN, AUTH0_CLIENT_ID, BASE_URL} = process.env;
  res.redirect(`https://${AUTH0_DOMAIN}/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${BASE_URL}`);
});

router.get("/clear_session", (req, res) => {
  res.req.session = null;
  res.clearCookie('token');
  res.redirect('/collections');
});

module.exports = router;