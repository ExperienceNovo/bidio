/**
* Bid.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        clickThoughCount: {
            type: 'string'
        },
        value: {
            type: 'string',
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

    getAll: function() {
        return Bid.find()
        .populate('user')
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

