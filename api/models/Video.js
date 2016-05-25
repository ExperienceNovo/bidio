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

    beforeValidate: function(values, cb) {
        var urlTitle = values.title.replace(/ /g,"-").toLowerCase();
        values.urlTitle = urlTitle
        Video.findOne({urlTitle: urlTitle}).exec(function (err, record) {
            if (record){
                values.urlTitle = urlTitle + '.8'
                cb();
            }
            else{
                cb();
            }
        });
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
        .then(function(model){

            console.log("MODEL",model);

            var active = model.bids.filter(function(bid){ return bid.isActive });

            console.log("ACTIVE",active)

            if (!active.length){
                return [model,null]
            }

            if(active.length > 1){
                throw new Error("More than one active bid found, aborting request");
            }

            return [model,Campaign.findOne(active[0].campaign)]

        })
        .spread(function(model,campaign){

            console.log(model,campaign);

            if (campaign){
                model = model.toObject();
                model.campaign = campaign;
            }

            return [model];
        });
    },

    getSome: function(limit, skip, sort, filter) {
        return Video.find()
        .limit(limit)
        .skip(skip)
        .populate('user')
        .populate('bids')
        .then(function(models){
            //this needs to work with an array
            /*for (x in models){
                var active = models[x].bids.filter(function(bid){ return bid.isActive });
                if (!active.length){
                    return [model,null]
                }
                if(active.length > 1){
                    throw new Error("More than one active bid found, aborting request");
                }
            }
            return [model,Campaign.findOne(active[0].campaign)]*/
        })
        .spread(function(models,campaign){
            /*if (campaign){
                model = model.toObject();
                model.campaign = campaign;
            }*/
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
