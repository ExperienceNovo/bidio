/**
* Campaign.js
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

        doesRedirect: {
            type: 'boolean',
            defaultsTo: true
        },

        redirectUrl: {
            type: 'string'
        },

        videoUrl: {
            type: 'string',
            required: true
        },

        published: {
            type: 'boolean',
            defaultsTo: false
        },

        campaignContent: {
            type: 'string',
            required: true
        },

        endDate: {
            type: 'date'
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

        bids: {
            collection: 'bid',
            via: 'campaign'
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
        return Campaign.find({published: true})
        .sort({createdAt: 'asc'})
		.populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Campaign.findOne(id)
        .populate('user')
        .populate('videos')
        .then(function (model) {
            return [model];
        });
    }
};
