/**
 *ContestController
 *
 * @description :: Server-side logic for managing Contests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
		Contest.getAll()
		.spread(function(models) {
			Contest.watch(req);
			Contest.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Contest.getOne(req.param('id'))
		.spread(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getByUrlTitle: function(req, res) {
		Contest.find()
		.where({urlTitle: req.param('path')})
		.populate('user')
		.populate('videos')
		.spread(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	// getSubmittedVideos: function(req, res) {
	// 	Contest.findOne(req.param('id'))
	// 	.populate('submittedVideos')
	// 	.spread(function(model) {
	// 		Contest.subscribe(req, model);
	// 		res.json(model);
	// 	})
	// 	.fail(function(err) {
	// 		res.send(404);
	// 	});
	// },

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			urlTitle: req.param('urlTitle'),
			contestContent: req.param('contestContent'),
			user: userId
		};

		Contest.create(model)
		.exec(function(err, contest) {
			if (err) {
				return console.log(err);
			}
			else {
				Contest.publishCreate(contest);
				res.json(contest);
			}
		});
	},

	update: function(req,res){
		var id = req.param('id');
		console.log(id);
		var model = {
			title: req.param('title'),
			urlTitle: req.param('urlTitle'),
			contestContent: req.param('contestContent'),
			user: req.param('user')
		};

		console.log(model);

		Contest.update({id: id}, model)
		.then(function(model){
			Contest.publishUpdate(model[0].id, model);
			res.json(model);
		});


	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Contest.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Contest.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Contest.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};
