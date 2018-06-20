/**
* Post.js
*
* @description :: Post Model.
*
*/


module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        postContent: {
            type: 'string',
            required: true
        },
        urlTitle: {
            type: 'string',
            required: true,
            unique: true
        },
        user: {
            model: 'user',
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
        return Post.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Post.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};

