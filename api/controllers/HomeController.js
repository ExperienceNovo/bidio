module.exports = {
	
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },

    ssl: function(req, res) {
        res.send('Fe71aPD7NmTtu1qvYoDQHbxgFmKmSumS0B2Lh9PblRs.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },

};