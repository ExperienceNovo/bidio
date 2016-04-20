/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  //bearer: {
  //  strategy: require('passport-http-bearer').Strategy
  //},

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'gRpa4CidX3vihKWZ3L1O1matV',
      consumerSecret: 'M7RskQyUx9Uzbc5C4O7ATQ00s3mC8JssPcP57H3EiVKcSFKSKp'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '629279003894718',
      clientSecret: '9d1cbd6a42f185aeb94ee1aa40a324e9',
      scope: ['email'] /* email is necessary for login behavior */
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '956713988528-86j1pkii5m9o8c1vfmb8qcbq2eot784d.apps.googleusercontent.com',
      clientSecret: 'TiuwOilqlUC4dtxOXbyhdqu2',
      scope: ['email'] /* email is necessary for login behavior */
    }
  }
};
