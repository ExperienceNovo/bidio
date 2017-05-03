module.exports = {
	//seo tags
    index: function(req, res) {
    	//this isnt running...
    	console.log('hellllloooo')
        if (req.params.id){
            Video.find({id:req.params.id}).then(function(models){
            	console.log(models)
                 res.view({
                    title: 'Embed',
                    currentUser: req.user,
                    video: models[0]
                });
            });
        }
    }
};