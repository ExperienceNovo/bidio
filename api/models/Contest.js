/**
* Contest.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true
        },
        videoUrl: {
            type: 'string',
            required: true
        },
        published: {
            type: 'boolean',
            defaultsTo: false
        },
        contestContent: {
            type: 'string',
            required: true
        },
        price: {
            type: 'string',
            required: true
        },
        contributionGoal: {
            type: 'string'
        },
        maxContributionPerVideo: {
            type: 'string'
        },
        urlTitle: {
            type: 'string',
            required: true,
            unique: true
        },
        user: {
            model: 'user',
            required: true
        },
        videos: {
            collection: 'video',
            via: 'contest'
        },
        prompt: {
            type: 'string',
            required: true
        },
        intro: {
            type: 'string',
            required: true
        }
    },

    afterCreate: function (post, next) {
        // set message.user = to appropriate user model
        User.getOne(post.user)
        .spread(function(user) {
            post.user = user;
            next(null, post);
        });
    },

    getAll: function() {
        return Contest.find({published: true})
        .sort({createdAt: 'asc'})
		.populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Contest.findOne(id)
        .populate('user')
        .populate('videos')
        .then(function (model) {
            return [model];
        });
    }
};
