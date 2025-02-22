/**
 * Development environment settings
 *
 */

module.exports = {
  hookTimeout: 1000000000,
  policies: {
    '*': ['enforceSsl', 'passport']
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
  connections:{
    productionMongoHqDb:{
      adapter: 'sails-mongo',
      url:'mongodb://heroku_wds9j5tq:i54cta42llqeu518u7s5o6gnl4@ds011790.mlab.com:11790/heroku_wds9j5tq'
    }
  },  
  baseUrl: 'https://www.cre8bid.io',
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
  http:{middleware:{prerender: require('prerender-node').set('prerenderServiceUrl', 'https://tranquil-reef-73037.herokuapp.com/').set('prerenderToken', 'V8W4l4iLL7BRD4pB8stg')}},
  session:{secret:"cb5b21a569493ca31834e3827c09b4ed"},
  secret:{
    "MAILGUN": {"key":"key-397bc08f8c25719e64559f3fdb6a8743", "domain":"mail.bidio.co"},
    "MONGO_URI": "mongodb://heroku_wds9j5tq:i54cta42llqeu518u7s5o6gnl4@ds011790.mlab.com:11790/heroku_wds9j5tq",
    "SESSION": {"secret":"cb5b21a569493ca31834e3827c09b4ed"},
    "PRERENDER": {"prerenderServiceUrl":"https://tranquil-reef-73037.herokuapp.com/", "prerenderToken":"V8W4l4iLL7BRD4pB8stg"},
    "TWITTER": {"consumerKey":"pIzYvAQOTHiKlysvVC5m2IYTI", "consumerSecret":"qzyJkjzOEVvttX0iu6ZON72BKZ4T0q0tXudYlUqHbtdPTgVArQ"},
    "FACEBOOK": {"clientID":"629279003894718", "clientSecret":"9d1cbd6a42f185aeb94ee1aa40a324e9"},
    "GOOGLE": {"clientID":"140697652385-7kf690p492kpr7pub7ni2f6322ui89od.apps.googleusercontent.com", "clientSecret":"EdNhiGSZajsrKl8NOJQ0PPjq"},
    "STRIPE": "sk_live_UB02d6uadNaoziMZ0HffmCQw",
    "AMAZON": {"accessKeyId":"AKIAJ6LR6NCGXZNH4QJQ", "secretAccessKey":"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", "key":"AKIAJZS6F2HWDJWWZE7A", "secret":"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", "bucket":"bidio8"},
    "MASTERACCT": {"address":"0xc2bb26082403cc1fb0e75769559c85be14ae95a3", "secret":"create"}
  }
};
