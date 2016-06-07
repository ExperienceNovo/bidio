module.exports = {
  shareTwitter:(['req','res'], function(req, res) {

    composition = req.param("composition")

    // if user is logged in
    if (req.user) {
      User.findOne(req.user.id)
        .populate('passports')
        .then(function(user){
          console.log(user)

          shareService.tweetVideo(composition, user)
        })
        .catch(function(err){
          console.log(err)
        })
    }
    else {
      console.log('no user logged in')

    }
  })
}
