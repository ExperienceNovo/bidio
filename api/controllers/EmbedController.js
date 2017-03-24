module.exports = {
	//seo tags
    index: function(req, res) {
        res.view({
            title: 'Embed',
            currentUser: req.user
        });
    }
};