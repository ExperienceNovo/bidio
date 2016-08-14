module.exports = {
  shareTwitter: function(req, res) {

    composition = req.param("composition")

    if (req.user) {
      User.findOne(req.user.id)
        .populate('passports')
        .then(function(user){
          console.log(user)

          shareService.tweetVideo(composition, user)
            .then(function(value) {
              res.send(value);
            }, function(reason) {
              console.log(reason)
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
