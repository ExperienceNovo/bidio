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
  }

};
