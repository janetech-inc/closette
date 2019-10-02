FROM node:10-stretch

ARG app_env
ARG auth0_client_id
ARG auth0_client_secret
ARG auth0_callback_url
ARG auth0_domain
ARG auth0_audience
ARG base_url
ARG express_session_secret
ARG sendgrid_apikey


ENV NODE_ENV production
ENV PORT 3000
ENV APP_ENV $app_env
ENV AUTH0_CLIENT_ID $auth0_client_id
ENV AUTH0_CLIENT_SECRET $auth0_client_secret
ENV AUTH0_CALLBACK_URL $auth0_callback_url
ENV AUTH0_DOMAIN $auth0_domain
ENV AUTH0_AUDIENCE $auth0_audience
ENV BASE_URL $base_url
ENV EXPRESS_SESSION_SECRET $express_session_secret
ENV SENDGRID_APIKEY $sendgrid_apikey


# ~~~ Bundle app source
WORKDIR /usr/src/app
COPY package*.json ./
# ~~~

# ~~~ Install app dependencies
RUN npm install
# ~~~

# ~~~ Copying source files
COPY . .
# ~~~

# ~~~ Build the project
RUN npm run build
# ~~~

# ~~~ Run command
EXPOSE ${PORT}
CMD [ "npm", "start" ]
# ~~~

