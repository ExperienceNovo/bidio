/**
 *BidController
 *
 * @description :: Server-side logic for managing Bids
 * @help        :: See http://links.sailsjs.org/docs/controllers
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
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);			
		});
	},

	getMine: function(req, res) {
		var id = req.user.id;
		Bid.find({user: id})
		.then(function(models) {
			Bid.watch(req);
			Bid.subscribe(req, models);
			return res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);
		});
	},

	getOne: function(req, res) {
		Bid.getOne(req.param('id'))
		.spread(function(model) {
			Bid.watch(req);
			Bid.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getByMember: function(req, res) {
		Bid.find()
		.populate('video')
		.where({user:req.param('id')})
		.then(function(model) {
			Bid.watch(req);
			Bid.subscribe(req, model);
			res.json(model);
			console.log(model)
		})
		.catch(function(err) {
			res.send(404);
		});
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
		.catch(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {

		var model = {
			value: req.param('value'),
			video: req.param('video'),
			user: req.param('user'),
		};

		Bid.create(model)
		.exec(function(err, bid) {
			if (err) {
				return console.log(err);
			}
			else {
				Bid.publishCreate(bid);
				res.json(bid);
			}
		});
	},

	update: function(req,res){
		var id = req.param('id');
		var model = {
			value: req.param('value'),
			video: req.param('video'),
			user: req.param('user'),
		};
		Bid.update({id: id}, model)
		.then(function(model){
			Bid.publishUpdate(model[0].id, model);
			res.json(model);
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}
		// Otherwise, find and destroy the model in question
		Bid.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Bid.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}
				Bid.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};
