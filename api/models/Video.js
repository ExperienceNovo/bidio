/**
* Video.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        urlTitle: {
            type: 'string',
            required: true,
            unique: true
        },
        amazonUrl: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true,
            unique: true
        },
        user: {
            model: 'user',
            required: true
        },
        views: {
            collection: 'view',
            via: 'video'
        },
				selectedContests: {
						collection: 'contest',
						via: 'submittedVideos'
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
        return Video.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Video.findOne(id)
        .populate('user')
        .then(function (model) {
            return [model];
        });
    }
};
