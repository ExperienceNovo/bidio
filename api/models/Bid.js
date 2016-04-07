/**
* Bid.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        value: {
            type: 'double',
            required: true,
        },
        video: {
            model: 'video',
            required: true,
        },
        user: {
            model: 'user',
            required: true,
        }
    },

    //afterCreate: function (post, next) {
    //    set message.user = to appropriate user model
    //    User.getOne(post.user)
    //    .spread(function(user) {
    //        post.user = user;
    //        next(null, post);
    //    });
    //},

    getAll: function() {
        return Bid.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Bid.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

