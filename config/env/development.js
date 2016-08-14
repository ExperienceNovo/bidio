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

  hookTimeout: 180000,

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


  //////////////////////////////////////////////
  // DEVELOPMENT KEYS // DOMAIN = LOCALHOST:1337
  // comment out for production
  //////////////////////////////////////////////

  // passport: {
  //
  //   twitter: {
  //     options: {
  //       consumerKey: 'KuCamyJMPULGv1IbLVzo8R3cZ',
  //       consumerSecret: 'hoAuYeieYnPyCljJ2yesZpJCAtDcjpyd5fVeuRRK3bhuSw40mK'
  //     }
  //   },
  //
  //   facebook: {
  //     options: {
  //       clientID: '681990038623614',
  //       clientSecret: '618cb0659b1d06ee73ed9cc30b157bc4',
  //       //callbackURL: 'http://localhost:1337/dashboard/profile',
  //       scope: ['email'], /* email is necessary for login behavior */
  //       profileFields: ['displayName', 'email', 'link', 'picture.type(small)']
  //     }
  //   },
  //
  //   google: {
  //     options: {
  //       clientID: '339413134115-lf714so29eoj2oqoai24hrshit2pfit0.apps.googleusercontent.com',
  //       clientSecret: 'dD8ortnHOe8SxBReatNjKNOP',
  //       scope: ['email'] /* email is necessary for login behavior */
  //     }
  //   }
  // }


  ////////////////////////////////////////
  // PRODUCTION KEYS AKA DOMAIN = BIDIO.CO
  // comment out for development
  ////////////////////////////////////////

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
  }




};
