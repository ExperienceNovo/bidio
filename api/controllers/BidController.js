/**
 * BidController
 *
 * @description :: Server-side logic for managing Bids
 *
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Bid.getAll()
		.spread(function(models) {
			Bid.watch(req);
			Bid.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err) {console.log(err);return res.negotiate(err);});
	},

	getMine: function(req, res) {
		var id = req.user.id;
		Bid.find({user: id})
		.then(function(models) {
			Bid.watch(req);
			Bid.subscribe(req, models);
			return res.json(models);
		})
		.catch(function(err) {console.log(err);return res.negotiate(err);});
	},

	getOne: function(req, res) {
		Bid.getOne(req.param('id'))
		.spread(function(model) {
			Bid.watch(req);
			Bid.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {res.send(404);});
	},

	getByMember: function(req, res) {
		Bid.find()
		.populate('video')
		.where({user:req.param('id')})
		.then(function(model) {
			Bid.watch(req);
			Bid.subscribe(req, model);
			res.json(model);
			//console.log(model)
		})
		.catch(function(err) {res.send(404);});
	},

	getByVideo: function(req, res) {
		Bid.find()
		.populate('user')
		.where({video:req.param('id')})
		.sort('value DESC')
		.then(function(model) {
			Bid.watch(req);
			Bid.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {res.send(404);});
	},

	create: function (req, res) {
		var model = {
			value: req.param('value'),
			video: req.param('video'),
			campaign: req.param('campaign')
		};
		if (req.param('user')){model.user = req.param('user')}
		if (req.param('viewCount')){model.viewCount = req.param('viewCount')}
		if (req.param('clickCount')){model.clickCount = req.param('clickCount')}
		if (req.body.hasOwnProperty('isActive')){model.isActive = req.body.isActive;}
		if (req.body.hasOwnProperty('isAccepted')){model.isAccepted = req.body.isAccepted;}
		if (req.body.hasOwnProperty('isNewEntry')){model.isNewEntry = req.body.isNewEntry;}
		if (req.param('originCampiagn')){model.originCampiagn = req.param('originCampiagn')}
		Bid.create(model)
		.exec(function(err, bid) {
			if (err) {return console.log(err);}
			else {
				Bid.getOne(bid.id)
				.spread(function(model) {
					res.json(model);
					Bid.publishCreate(model);
					Video.getOne(model.video).then(function(videoModel){
						Video.publishUpdate(videoModel[0].id, videoModel[0]);
					});
				});
			}
		});
	},

	update: function(req,res){
		var id = req.param('id');
		var model = {
			id: id,
			value: req.param('value'),
			video: req.param('video'),
			campaign: req.param('campaign')
		};
		if (req.param('user')){model.user = req.param('user')}
		if (req.param('viewCount')){model.viewCount = req.param('viewCount')}
		if (req.param('clickCount')){model.clickCount = req.param('clickCount')}
		if (req.body.hasOwnProperty('isActive')){model.isActive = req.body.isActive;}
		if (req.body.hasOwnProperty('isAccepted')){model.isAccepted = req.body.isAccepted;}
		if (req.body.hasOwnProperty('isNewEntry')){model.isNewEntry = req.body.isNewEntry;}
		if (req.param('originCampiagn')){model.originCampiagn = req.param('originCampiagn')}
		Bid.update({id: id}, model)
		.then(function(model){
			//Bid.publishUpdate(model[0].id, model);
			return res.json(model);
		})
		.then(function(err){return res.negotiate(err);});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Bid.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Bid.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Bid.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};
