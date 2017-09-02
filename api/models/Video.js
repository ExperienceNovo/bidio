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
        thumbnailUrl: {
            type: 'string',
            defaultsTo: '/images/video-overlay.png'
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
        liveViewCount:{
            type: 'integer',
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
        if (typeof(values.title) != "undefined"){
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
        }
        else{cb();}
    },

    getAll: function() {
        return Video.find()
        .sort({createdAt: 'desc'})
        .populate('user')
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Video.findOne(id)
        .populate('user')
        .populate('bids')
        .populate('views')
        .then(function(model){
            var active = model.bids.filter(function(bid){ return bid.isActive });
            if (!active.length){
                return [model,null]
            }
            if(active.length > 1){
                throw new Error("More than one active bid found, aborting request");
            }
            return [model,Campaign.findOne(active[0].campaign)]
        })
        .spread(function(model,campaign){
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

};
