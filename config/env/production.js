/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  hookTimeout: 160000,

  orm: {
  	_hookTimeout: 60000
  },

  models: {
    connection: 'productionMongoHqDb',
    migrate: 'safe'
  },

  session: {
    adapter: 'mongo',
    url: 'mongodb://heroku_wds9j5tq:i54cta42llqeu518u7s5o6gnl4@ds011790.mlab.com:11790/heroku_wds9j5tq',
    collection: 'sessions'
  },

  mailgun: {
    key: 'key-4e1b43d98f37e10fc6d350d8ec21518c',
    domain: 'bidio.co'
  },

  // passport: {
  //
  //   local: {
  //     strategy: require('passport-local').Strategy
  //   },
  //
  //   //bearer: {
  //   //  strategy: require('passport-http-bearer').Strategy
  //   //},
  //
  //   twitter: {
  //     name: 'Twitter',
  //     protocol: 'oauth',
  //     strategy: require('passport-twitter').Strategy,
  //     options: {
  //       consumerKey: 'lol-production-lol',
  //       consumerSecret: 'qzyJkjzOEVvttX0iu6ZON72BKZ4T0q0tXudYlUqHbtdPTgVArQ'
  //     }
  //   },
  //
  //   facebook: {
  //     name: 'Facebook',
  //     protocol: 'oauth2',
  //     strategy: require('passport-facebook').Strategy,
  //     options: {
  //       clientID: '629279003894718',
  //       clientSecret: '9d1cbd6a42f185aeb94ee1aa40a324e9',
  //       //callbackURL: 'http://localhost:1337/dashboard/profile',
  //       scope: ['email'], /* email is necessary for login behavior */
  //       profileFields: ['displayName', 'email', 'link', 'picture.type(small)']
  //     }
  //   },
  //
  //   google: {
  //     name: 'Google',
  //     protocol: 'oauth2',
  //     strategy: require('passport-google-oauth').OAuth2Strategy,
  //     options: {
  //       clientID: '140697652385-7kf690p492kpr7pub7ni2f6322ui89od.apps.googleusercontent.com',
  //       clientSecret: 'EdNhiGSZajsrKl8NOJQ0PPjq',
  //       scope: ['email'] /* email is necessary for login behavior */
  //     }
  //   }
  // }

  passport: {

    twitter: {
      options: {
        consumerKey: 'pIzYvAQOTHiKlysvVC5m2IYTI',
        consumerSecret: 'qzyJkjzOEVvttX0iu6ZON72BKZ4T0q0tXudYlUqHbtdPTgVArQ'
      }
    },

    facebook: {
      options: {
        clientID: '629279003894718',
        clientSecret: '9d1cbd6a42f185aeb94ee1aa40a324e9',
        //callbackURL: 'http://localhost:1337/dashboard/profile',
        scope: ['email'], /* email is necessary for login behavior */
        profileFields: ['displayName', 'email', 'link', 'picture.type(small)']
      }
    },

    google: {
      options: {
        clientID: '140697652385-7kf690p492kpr7pub7ni2f6322ui89od.apps.googleusercontent.com',
        clientSecret: 'EdNhiGSZajsrKl8NOJQ0PPjq',
        scope: ['email'] /* email is necessary for login behavior */
      }
    }
  },

  baseUrl: 'http://www.bidio.co'


};
