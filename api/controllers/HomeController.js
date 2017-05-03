module.exports = {


    index: function(req, res) {
        if (req.params.id){
            Video.find({id:req.params.id}).then(function(models){
                 res.view({
                    title: 'Home',
                    currentUser: req.user,
                    video: models[0]
                });
            })
        }
        else{
            res.view({
                title: 'Home',
                currentUser: req.user
            });
        }
    },

    ssl: function(req, res) {
        res.send('iEMOp7QPc7YUUAMl5rP-Kgauvf-SbR5O6EKPjzwG9eg.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },

};