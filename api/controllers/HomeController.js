module.exports = {

    index: function(req, res) {
        if (req.params.id){
            Video.find({id:req.params.id}).then(function(models){
                 res.view({
                    title: 'Home',
                    currentUser: req.user,
                    video: models[0]
                });
            });
        }
        else{
            Video.find({id:'5730ea61adfa6d0300a0a22b'}).then(function(models){
                 res.view({
                    title: 'Home',
                    currentUser: req.user,
                    video: models[0]
                });
            });
        }
    },

    ssl: function(req, res) {
        res.send('QaNq94icVbQIi3HwabghOsybwHT36XCLVAD4JYJK7oc.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },

};