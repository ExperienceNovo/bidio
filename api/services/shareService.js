var Twit = require('twit');                        //might not be able to put service because needs require()???
// var ezfb = require('angular-easyfb');
var fs = require('fs');

module.exports = {

  tweetVideo: function(composition, user) {

    var tokens;
    for (var i in user.passports) {
			if (user.passports[i].provider === 'twitter')
				tokens = user.passports[i].tokens;
		}

    var T = new Twit({
      consumer_key:         'pIzYvAQOTHiKlysvVC5m2IYTI',
      consumer_secret:      'qzyJkjzOEVvttX0iu6ZON72BKZ4T0q0tXudYlUqHbtdPTgVArQ',
      access_token:         tokens.token,
      access_token_secret:  tokens.tokenSecret
      // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })

    var b64image = fs.readFileSync('/Users/sueserene/projects/bidio/assets/images/video-overlay.png', { encoding: 'base64' })

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
            console.log(data)
          })
        }
      })
    })
  },

  // facebookShare: function() {
  //
  // }

};
