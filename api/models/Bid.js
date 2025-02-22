/**
* Bid.js
*
* @description :: Bid Model...
*
*/

module.exports = {

	attributes: {
        clickCount: {
            type: 'integer',
            defaultsTo: 0
        },
        viewCount: {
            type: 'integer',
            defaultsTo: 0
        },
        views: {
            collection: 'view',
            via: 'bid'
        },
        clicks: {
            collection: 'click',
            via: 'bid'
        },
        isAccepted: {
            type: 'boolean',
            defaultsTo: false
        },
        isActive: {
            type: 'boolean',
            defaultsTo: false
        },
        isNewEntry: {
            type: 'boolean',
            defaultsTo: false
        },
        value: {
            type: 'string',
            required: true,
        },
        //TODO: this should be on the video model
        originCampaign: {
            model: 'campaign'
        },
        //TODO: this should be on the video model
        originCampaignExpiry: {
            type: 'date',
            defaultsTo: function(){
                var now = new Date().getTime();
                var later = new Date( now + 14 * 24 * 60 * 60 * 1000 );
                return later;
            }
        },
        campaign: {
            model: 'campaign',
            required: true
        },
        video: {
            model: 'video',
            required: true,
        },
        user: {
            model: 'user'
        }
    },

    click: function(id) {
        return Bid.findOne(id)
        .then(function(bid){
            bid.clickCount++;
            return Bid.update({id: id}, bid);
        });
    },

    view: function(id) {
        return Bid.findOne(id)
        .then(function(bid){
            bid.viewCount++;
            return Bid.update({id: id}, bid);
        });
    },

    beforeCreate: function(model,next){
        if (!model.isActive){return next(null,model);}
        Bid.find()
        .where({isActive: true})
        .where({video: model.video})
        .then(function(bids){
            if (!bids.length){return Promise.resolve();}
            if (bids.length > 1){
                return Promise.all(
                    bids.map(function(bid){
                        bid.isActive = false;
                        return Bid.update({id: bid.id}, bid);
                    })
                )
            }
            bids[0].isActive = false;
            return Bid.update({id: bids[0].id}, bids[0]);
        })
        .then(function(){
            return next(null,model);
        })
        .catch(function(err){
            next(err, null);
        });
    },

    beforeUpdate: function(model,next){
        if (!model.isActive){return next(null,model);}
        Bid.find({isActive: true, video: model.video})
        .then(function(bid){
            if (!bid.length){return true;}
            if (bid.length == 1){
                bid[0].isActive = false;
                return Bid.update({id: bid[0].id}, bid[0]);
            }
        })
        .then(function(){
            return next(null,model);
        })
        .catch(function(err){next(err, null)});

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
        .populate('campaign')
        .then(function (model) {
            return [model];
        });
    }
};

