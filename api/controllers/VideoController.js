/**
 * VideoController
 *
 * @description :: Server-side logic for managing Videos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	getAll: function(req, res) {
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

	getByUrl: function(req, res) {
		Video.find()
		.where({urlTitle: req.param('path')})
		.populateAll()
		.spread(function(model) {
			Video.watch(req);
			Video.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404,err);
		});
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

	getPromoted: function(req, res) {
		Video.find()
		.where({isPromoted: true})
		.then(function(model) {
			Video.watch(req);
			Video.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404,err);
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

	create: function (req, res) {
		var userId = req.param('user');
		var title = req.param('title');
		var urlTitle = req.param('urlTitle');
		var categoryList = req.param('categoryList');
		var boxPrice = req.param('boxPrice');
		var imageList = req.param('imageList');
		var price = req.param('price');
		var weight = req.param('weight');
		var VideoInformation = req.param('VideoInformation');
		var VideoOptions = req.param('VideoOptions');
		var hiddenPrice = req.param('hiddenPrice');
		var isPromoted = req.param('isPromoted');
		//var views = ''


		var model = {
			user: userId,
			title: title,
			urlTitle: urlTitle,
			categoryList: categoryList,
			boxPrice: boxPrice,
			imageList: imageList,
			price: price,
			weight: weight,
			VideoInformation: VideoInformation,
			VideoOptions: VideoOptions,
			hiddenPrice: hiddenPrice,
			isPromoted: isPromoted,
			//views: views
		};

		Video.create(model)
		.exec(function(err, Video) {
			if (err) {
				return console.log(err);
			}
			else {
				Video.publishCreate(Video);
				res.json(Video);
			}
		});
	},

	update: function(req, res) {

		/*var id = req.param('id');
		var userId = req.param('user');
		var title = req.param('title');
		var urlTitle = req.param('urlTitle');
		var categoryList = req.param('categoryList');
		var boxPrice = req.param('boxPrice');
		var imageList = req.param('imageList');
		var price = req.param('price');
		var weight = req.param('weight');
		var VideoInformation = req.param('VideoInformation');
		var VideoOptions = req.param('VideoOptions');
		var hiddenPrice = req.param('hiddenPrice');
		var isPromoted = req.param('isPromoted');


		req.file('VideoImage').upload({
		  adapter: require('skipper-s3'),
		  key: 'AKIAJZS6F2HWDJWWZE7A',
		  secret: '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',
		  bucket: 'iboxxz'
		}, function whenDone(err, uploadedFiles) {

		    if (err) {
		      return res.negotiate(err);
		    }
		    // If no files were uploaded, respond with an error.
		    if (uploadedFiles.length === 0){
		      return res.badRequest('No file was uploaded');
		    }

		    var imageUrl = uploadedFiles[0].extra.Location;
		    imageList.push(imageUrl);
		    console.log(imageUrl);
		    console.log(imageList);

			var model = {
				user: userId,
				title: title,
				urlTitle: urlTitle,
				categoryList: categoryList,
				boxPrice: boxPrice,
				imageList: imageList,
				price: price,
				weight: weight,
				VideoInformation: VideoInformation,
				VideoOptions: VideoOptions,
				hiddenPrice: hiddenPrice,
				isPromoted: isPromoted,
			};

			Video.update( {id: id}, model).exec(function afterwards(err, updated){
			  if (err) {
			    return;
			  }
			});


		});*/

		
		var id = req.param('id');
		var userId = req.param('user');
		var title = req.param('title');
		var urlTitle = req.param('urlTitle');
		var categoryList = req.param('categoryList');
		var boxPrice = req.param('boxPrice');
		var imageList = req.param('imageList');
		var price = req.param('price');
		var weight = req.param('weight');
		var VideoInformation = req.param('VideoInformation');
		var VideoOptions = req.param('VideoOptions');
		var hiddenPrice = req.param('hiddenPrice');
		var isPromoted = req.param('isPromoted');

		
		var model = {
			user: userId,
			title: title,
			urlTitle: urlTitle,
			categoryList: categoryList,
			boxPrice: boxPrice,
			imageList: imageList,
			price: price,
			weight: weight,
			VideoInformation: VideoInformation,
			VideoOptions: VideoOptions,
			hiddenPrice: hiddenPrice,
			isPromoted: isPromoted,
		};

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

	uploadPicture: function(req, res) {

		var id = req.param("id");

		req.file('video').upload({
		  adapter: require('skipper-s3'),
		  key: 'AKIAJZS6F2HWDJWWZE7A',
		  secret: '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',
		  bucket: 'iboxxz',
		  name: 'Videos'
		}, function whenDone(err, uploadedFiles) {

		    if (err) {
		      return res.negotiate(err);
		    }
		    // If no files were uploaded, respond with an error.
		    if (uploadedFiles.length === 0){
		      return res.badRequest('No file was uploaded');
		    }

		    var newUrl = uploadedFiles[0].extra.Location;
		    Video.findOne(id).then(function(Video){
		    	var imageList;
		    	if (Video.imageList){
		    		imageList = Video.imageList;
		    	}
		    	else{
		    		imageList = [];
		    	}
		    	imageList.push(newUrl);
		    	return Video.update({id: id}, {imageList: imageList});
		    }).then(function(success){
		    	return res.ok();
		    }).fail(function(err){
		    	console.log(err);
		    	return res.fail(err);
		    });
		});

	}
	
};

