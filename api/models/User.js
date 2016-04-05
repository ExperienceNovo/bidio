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
        passports : { collection: 'Passport', via: 'user' }
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