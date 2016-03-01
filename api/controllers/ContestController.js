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
		.where({url_title: req.param('path')})
		.spread(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			url_title: req.param('url_title'),
			Contest_content: req.param('Contest_content'),
			user: userId
		};

		Contest.create(model)
		.exec(function(err, Contest) {
			if (err) {
				return console.log(err);
			}
			else {
				Contest.publishCreate(Contest);
				res.json(Contest);
			}
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

