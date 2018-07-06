/**
* Content.js
*
* @description :: Content Model.
*
*/

module.exports = {

	attributes: {
        amazonUrl: {
            type: 'string',
            required: true
        },
        bids: {
            collection: 'bid',
            via: 'video'  
        }
        clickCount: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        clicks: {
            collection: 'click',
            via: 'video'
        },
        description: {
            type: 'string',
            required: true
        },
        liveViewCount:{
            type: 'integer',
            defaultsTo: 0
        },
        thumbnailUrl: {
            type: 'string',
            defaultsTo: '/images/video-overlay.png'
        },
        tags: {
            type: 'string',
        },
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
        user: {
            model: 'user',
            required: true
        },
        viewCount: {
            type: 'integer',
            required: true,
            defaultsTo: 0
        },
        views: {
            collection: 'view',
            via: 'video'
        }, 
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
                else{cb();}
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

    getSome: function(limit, skip, sort) {
        return Video.find()
        .limit(limit)
        .skip(skip)
        .sort(sort)
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
            return [models,Campaign.findOne(active[0].campaign)]*/
            return models
        })
        //.spread(function(models,campaign){
            /*if (campaign){
                model = model.toObject();
                model.campaign = campaign;
            }*/
            //return [models];
        //});
    },

};
