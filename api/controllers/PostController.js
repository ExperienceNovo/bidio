/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 *
 */
 
var _ = require('lodash');

module.exports = {

	//TODO: DELETE
	getAll: function(req, res) {
		Post.getAll()
		.spread(function(models) {
			Post.watch(req);
			Post.subscribe(req, models);
			res.json(models);
		})
	},

	getOne: function(req, res) {
		Post.getOne(req.param('id'))
		.spread(function(model) {
			Post.subscribe(req, model);
			res.json(model);
		});
	},

	getSome: function(req, res) {

	},

	getByUrlTitle: function(req, res) {
		Post.find()
		.where({urlTitle: req.param('path')})
		.spread(function(model) {
			Post.subscribe(req, model);
			res.json(model);
		});
	},

	update: function(req, res) {
		var id = req.param('id');
		var model = {
			title: req.param('title'),
			postContent: req.param('postContent'),
			user: req.param('user')
		};
		Post.update( {id: id}, model).exec(function afterwards(err, updated){
		  if (err) {return;}
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			postContent: req.param('postContent'),
			user: req.param('user')
		};
		Post.create(model)
		.exec(function(err, post) {
			if (err) {return console.log(err);}
			else {
				Post.publishCreate(post);
				res.json(post);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		Post.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Post.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Post.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

