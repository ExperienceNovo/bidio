/**
 * VideoController
 *
 * @description :: Server-side logic for managing Videos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');
var fs = require("fs");

module.exports = {

	getAll: function(req, res) {
		Video.getAll()
		.spread(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			return res.json(models);
		})
		.fail(function(err) {
			console.log(err);
			return res.negotiate(err);
		});
	},

	getMine: function(req,res){
		var me = req.user.id || req.user._id;

		Video.find({user: me})
			.then(function(models){
				Video.watch(req);
				Video.subscribe(req, models);
				res.json(models);
			})
			.catch(function(err){
				console.log(err);
				res.negotiate(err);
			})
	},

	getSome: function(req, res) {
		var limit = req.param('limit');
		var skip = req.param('skip');

		var sort = req.param('sort');
		var filter = req.param('filter');


		Video.getSome(limit, skip, sort, filter)
		.then(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getTrending: function(req, res) {
		Video.getAll()
		.spread(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getRelated: function(req, res) {

		var limit = 6;
		var skip = 1;

		Video.getOne(req.param('id'))
		.spread(function(model) {

			var categoryList = model.categoryList;
			//only first for now
			var filter = categoryList.split(',')[0];

			Video.find()
	        .where({categoryList:{contains: filter }})
	        .limit(limit)
	        .skip(skip)
			.then(function(models) {
				Video.watch(req);
				Video.subscribe(req, model);
				res.json(models);
			})
			.fail(function(err) {
				res.send(404,err);
			});

		})
		.fail(function(err) {
			res.send(404);
		});

	},

	getOne: function(req, res) {
		Video.getOne(req.param('id'))
		.spread(function(model) {
			Video.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	upload: function(req,res){

		/*uncomment this if you want to save to a particular folder*/
		//var filename = req.file('video')._files[0].stream.filename;

		req.file('video').upload({
			adapter: require('skipper-s3'),
		  key: 'AKIAJZS6F2HWDJWWZE7A',
		  secret: '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',
		  bucket: 'bidio8',
		  /*uncomment this if you want to save to a particular folder*/
		  //saveAs: "Event-Pictures/" + utilsService.guid() + filename.split(".").pop()
		}, function response(err,uploadedFiles){

			if (err) {
	      return res.negotiate(err);
	    }

	    if (uploadedFiles.length === 0){
	      return res.badRequest('No file was uploaded');
	    }

	    var amazonUrl = uploadedFiles[0].extra.Location;

	    return res.json({amazonUrl: amazonUrl});
		})

	},

	create: function (req, res) {

		var model = {
			title: req.param("title"),
			description: req.param("description"),
			amazonUrl: req.param("amazonUrl"),
			urlTitle: req.param("urlTitle"),
			user: req.user.id
		};

		Video.create(model)
			.then(function(video) {
				Video.publishCreate(video);
				return res.json(video);
			})
			.catch(function(err){
				console.log(err);
				res.negotiate(err);
			});

	},

	update: function(req, res) {
		
		var id = req.param('id');
		var model = {};
		Video.update( {id: id}, model).exec(function afterwards(err, updated){
		  if (err) {
		    return;
		  }
		  console.log(updated);
		});
		
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Video.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Video.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Video.publishDestroy(model.id);
				return res.json(model);
			});
		});
	},

	download: function(req,res){

		utilsService.randomVid()
			.then(function(vid){
				res.set("Content-type", "video/mp4");
				res.send(vid);
			})
			.catch(function(err){
				res.negotiate(err);
			})

	}

	
	
};

