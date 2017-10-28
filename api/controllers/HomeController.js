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
        res.send('ojGqIlbsHofqbR-HmgJVdoOyqjtbq16YbIljFBkJ2WA.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },

    ssl2: function(req, res) {
        res.send('Wd3QJxLaf73zK9F9-46blrISyzuic3-p2Q8VHeOLzBc.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI');
    },

};