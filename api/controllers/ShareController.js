module.exports = {
  shareTwitter: function(req, res) {

    composition = req.param("composition")
    shareUrl = req.param("shareUrl")

    if (req.user) {
      User.findOne(req.user.id)
        .populate('passports')
        .then(function(user){
          console.log(user)

          shareService.tweetVideo(composition, user, shareUrl)
            .then(function(value) {
              console.log('sharecontroller: ', value)
              res.send(value);
            }, function(reason) {
              console.log('sharecontroller: ', reason)
              res.negotiate(reason)
            })
        })
        .catch(function(err){
          console.log(err)
        })
    }
    else {
      console.log('no user')
    }
  }
}
