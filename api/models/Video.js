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

        minimumPrice: {
            type: 'string'
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

        bids: {
            collection: 'bid',
            via: 'video'  
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
        .populate('bids')
        .then(function (model) {
            return [model];
        });
    },

    beforeUpdate: function(model, next){

        /*if no click or view continue*/
        if(!(model.click || model.view)){
            return next(null,model);
        }

        /*adjust click count*/
        if (model.click){
            model.clickCount++;
        }

        /*adjust view count*/
        if (model.view){
            model.viewCount++;
        }

        /*cycle through all posible updates*/
        Promise.resolve()
        .then(function(){

            return model.click ? Click.create(model.click) : true;

        })
        .then(function(){

            return (model.click && model.click.bid) ? Bid.click(model.click.bid) : true;

        })
        .then(function(){

            return model.view ? View.create(model.view) : true;

        })
        .then(function(){

            return (model.view && model.view.bid) ? Bid.view(model.view.bid) : true;

        })
        .then(function(){

            return next(null,model);

        })
        .catch(function(err){

            return next(err,null);

        });

    }
};
