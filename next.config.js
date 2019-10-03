const withSass = require("@zeit/next-sass");
const { ENV_VARS } = require(`./config/environments/${process.env.APP_ENV || 'development'}`);

const config = {
  env: {
    API_URL: ENV_VARS.API_URL,
    API_URL_CATALOG: ENV_VARS.API_URL_CATALOG,
    GA_TRACKING_ID: ENV_VARS.GA_TRACKING_ID
  },
  webpack: (config) => {
    return config;
  }
};

module.exports = withSass();