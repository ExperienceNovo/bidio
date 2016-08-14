var Twit = require('twit');                        //might not be able to put service because needs require()???
// var ezfb = require('angular-easyfb');
var fs = require('fs');
var Q = require('q');
var path = require('path');

module.exports = {

  tweetVideo: function(composition, user) {

    var toReturn = {}

    for (var i in user.passports) {
			if (user.passports[i].provider === 'twitter')
				var tokens = user.passports[i].tokens;
		}

    var T = new Twit({
      consumer_key:         sails.config.passport.twitter.options.consumerKey,
      consumer_secret:      sails.config.passport.twitter.options.consumerSecret,
      access_token:         tokens.token,
      access_token_secret:  tokens.tokenSecret
      // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })

    var b64image = fs.readFileSync(path.join(__dirname, '../../assets') + '/images/video-overlay.png', { encoding: 'base64' })

    var deferred = Q.defer();

    T.post('media/upload', { media_data: b64image }, function (err, data, response) {

      var mediaIdStr = data.media_id_string
      var altText = "Cover frame of bidio video."
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

      T.post('media/metadata/create', meta_params, function (err, data, response) {
        if (!err) {
          // now we can reference the media and post a tweet (media will attach to the tweet)
          console.log(composition)
          var params = { status: composition, media_ids: [mediaIdStr] }

          T.post('statuses/update', params, function (err, data, response) {
            if (!err) {
              console.log(data)
              toReturn.tweetId = data.id_str;
              toReturn.username = data.user.screen_name;
              deferred.resolve(toReturn)
            }
            else
              console.log(err)
              deferred.reject(err)
          })
        }
        else
          console.log(err)
      })

    })

    return deferred.promise;

  },

  // facebookShare: function() {
  //
  // }

};
