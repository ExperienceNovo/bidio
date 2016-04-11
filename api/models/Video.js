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
            required: true
        },
        user: {
            model: 'user',
            required: true
        },
        views: {
            collection: 'view',
            via: 'video'
        },
        clicks: {
            collection: 'click',
            via: 'video'
        },
        viewCount: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        clickCount: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        contest: {
            model: 'contest'
        },
        approved: {
            type: 'boolean',
            defaultsTo: false
        },
        isNew: {
            type: 'boolean',
            defaultsTo: true
        }
    },

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
        .populate('contest')
        .then(function (model) {
            return [model];
        });
    },

    beforeUpdate: function(model, next){
        /*This code assumes that se aren't updating click and view at the same time*/
        if (model.click && model.view){
            var err = new Error("Can't update click and view at the same time");
            err.status = 400;
            return next(err,null);
        }

        else if (model.click){

            Click.create(model.click).then(function(newClick){

                if (!newClick){
                    var err = new Error("Click creation failed");
                    err.status = 500;
                    return next(err,null);
                }

                delete model.click;

                model.clickCount++;

                return next(null,model);
            })
        }

        else if (model.view){

            View.create(model.view).then(function(newView){

                if (!newView){
                    var err = new Error("View creation failed");
                    err.status = 500;
                    return next(err,null);
                }

                delete model.view;

                model.viewCount++;

                return next(null,model);
            })

        } else {

            return next(null,model);
            
        }
    }
};
