module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Embed',
            currentUser: req.user
        });
    }
};