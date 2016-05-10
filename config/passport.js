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
      consumerKey: 'pIzYvAQOTHiKlysvVC5m2IYTI',
      consumerSecret: 'qzyJkjzOEVvttX0iu6ZON72BKZ4T0q0tXudYlUqHbtdPTgVArQ'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '629279003894718',
      clientSecret: '9d1cbd6a42f185aeb94ee1aa40a324e9',
      //callbackURL: 'http://localhost:1337/dashboard/profile',
      scope: ['email'], /* email is necessary for login behavior */
      profileFields: ['displayName', 'email', 'link', 'picture.type(small)']
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '140697652385-7kf690p492kpr7pub7ni2f6322ui89od.apps.googleusercontent.com',
      clientSecret: 'EdNhiGSZajsrKl8NOJQ0PPjq',
      scope: ['email'] /* email is necessary for login behavior */
    }
  }
};
