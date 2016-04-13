module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        videos: {
            collection: 'video',
            via: 'user'
        },
        isAdmin: {
            type: 'boolean',
            defaultsTo: false
        },
        profile: {
            collection: 'Profile',
            via: 'user'
        },
        passports : { collection: 'Passport', via: 'user' }
    },

    afterCreate: function(model,next){

        Profile.create({user: model.id})
            .then(function(profile){

                if (!profile){
                    return next(new Error("Error creating user profile"), null);
                }

                model.profile = profile;

                return next(null, model);

            })
            .catch(function(err){
                return next(err, null);
            });

    },

    getSome: function(limiting, skipping) {

        return User.find()
            .limit(limiting)
            .skip(skipping)
            .then(function (models) {
                return models;
            });
        },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};