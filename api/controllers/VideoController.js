/**
 * VideoController
 *
 * @description :: Server-side logic for managing Videos
 *
 */

var _ = require('lodash');
var fs = require("fs");
var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

module.exports = {

	getMine: function(req,res){
		var me = req.user.id || req.user._id;
		Video.find({user: me})
		.populate('bids')
		.populate('views')
		.populate('clicks')
		.then(function(models){
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err){console.log(err);res.negotiate(err);});
	},

	getByMember: function(req, res) {
		Video.find()
		.where({user:req.param('id')})
		.then(function(model) {
			Video.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {res.send(404);});
	},

	getSome: function(req, res) {
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		//FILTER
		Video.getSome(limit, skip, sort)
		.then(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		});
	},

	//TODO
	getTrending: function(req, res) {
		Video.getAll()
		.spread(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		});
	},

	//TODO
	//Search?
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
			});
		});
	},

	//REFACTOR
	getOne: function(req, res) {
		Video.getOne(req.param('id'))
		.spread(function(model) {
			sails.sockets.join(req, model.id, function(err) {
	    		console.log(sails.sockets.subscribers(model.id).length);
	    		model.liveViewCount = sails.sockets.subscribers(model.id).length;
				Video.subscribe(req, model);
				Video.update({id: model.id}, {liveViewCount: model.liveViewCount}).then(function(updatedModel){
					model.liveViewCount = updatedModel[0].liveViewCount
					Video.publishUpdate(model.id, model);
				})
				res.json(model);
	    	});
		});
	},

	upload: function(req,res){
		res.setTimeout(0);
		//WARNING: CREDENTIALS
		var options = {
			adapter: require("skipper-s3"),
			key: sails.config.secret.key,
		 	secret: sails.config.secret.AMAZON.secret,
		 	bucket: sails.config.secret.AMAZON.bucket,
		}
		//console.log(req.file('video'))
		var byteCount = req.file('video')._files[0].stream.byteCount
		//console.log(req.file('video')._readableState.buffer)
		req.file('video')
		.on('progress', function (event){
			//why is this doubled
			//server processing --> to s3. 
			//need to programatically delete s3 chunks if fail / and on delete
			var percentageUploaded = event.written/byteCount
			console.log(percentageUploaded)
		})
		.upload(options, function response(err,uploadedFiles){
			console.log('we are in the code')
			if (err) {return res.negotiate(err);}
		    if (uploadedFiles.length === 0){return res.badRequest('No file was uploaded');}
		    console.log(uploadedFiles)
		    var amazonUrl = uploadedFiles[0].extra.Location;
		    return res.json({amazonUrl: amazonUrl});
		});

		///*var stream  = fs.createWriteStream('outputfile.divx');
		/*console.log(req.file('video')._files[0].stream);
		var stream = req.file('video')._files[0].stream;
		ffmpeg(stream)
		.on('progress', function(progress) {
			console.log('Processing: ' + progress.percent + '% done');
		})
		.output('outputfile.webm')
		.output(stream)
		.on('end', function() {
			console.log('Finished processing');
		})
		.on('error', function(err, stdout, stderr) {
		    console.log('Cannot process video: ' + err.message);
		  })
		.run();*/
		//convert(req.file('video').Upstream)
	},

	create: function (req, res) {
		var model = {
			amazonUrl: req.param("amazonUrl"),
			description: req.param("description"),
			tags: req.param("tags"),
			title: req.param("title"),
			urlTitle: req.param("urlTitle"),
			user: req.user.id
		};
		if (req.param("minimumPrice")){model.minimumPrice = req.param("minimumPrice");}
		Video.create(model)
		.then(function(video) {
			Video.publishCreate(video);
			return res.json(video);
		})
		.catch(function(err){console.log(err);res.negotiate(err);});
	},

	update: function(req, res) {
		var id = req.param('id');
		var model = {id: id};
		if (req.param("approved")){model.approved = req.param("approved");}
		if (req.param('clicked')){model.click = {video: id}; if (req.user){model.click.user = req.user.id;}}
		if (req.param("description")){model.description = req.param("description");}
		if (req.param("minimumPrice")){model.minimumPrice = req.param("minimumPrice");}
		if (req.param("tags")){model.tags = req.param("tags");}
		if (req.param("title")){model.title = req.param("title");}
		Video.update({id: id}, model)
		.then(function(result){
			return res.json(result);
		})
		.catch(function(err){return res.negotiate(err);})
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		//TODO: delete associated bids etc
		Video.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Video.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Video.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};

