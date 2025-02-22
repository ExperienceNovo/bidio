/**
* Campaign.js
*
* @description :: Campaign Model...
*
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
        isFeatured: {
            type: 'boolean',
            defaultsTo: false
        },
        redirectUrl: {
            type: 'string'
        },
        campaignImageUrl: {
            type: 'string',
        },
        bannerUrl: {
            type: 'string',
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

    beforeValidate: function(values, cb) {
        //if editing own id dont add .8
        if (typeof(values.title) != "undefined"){
            var urlTitle = values.title.replace(/ /g,"-").toLowerCase();
            values.urlTitle = urlTitle
            Campaign.findOne({urlTitle: urlTitle}).exec(function (err, record) {
                if (typeof(record) != "undefined" && values.id != record.id){
                    values.urlTitle = record.urlTitle + '.8';
                    cb();
                }
                else{
                    cb();
                }
            });
        }
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
        .populate('bids')
        .then(function(campaign){
            return [campaign,Promise.all(
                campaign.bids.map(function(bid){
                    return Video.findOne(bid.video);
                })
            )];
        })
        .spread(function(model,videos){
            model = model.toObject();
            model.bids.forEach(function(bid,i){
                bid.video = videos[i]
            });
            return model;
        })
        .then(function (model) {
            return [model];
        });
    }
};
