/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	blockchainSocket: function(req, res){
		sails.sockets.join(req, 'pendingTransactions', function(err) {
			//res.json({});
    	});
		sails.sockets.join(req, 'createView', function(err) {
			//res.json({});
    	});
    	res.json({});
	},

	getByVideo: function(req, res) {
		View.find()
		.where({video:req.param('id')})
		.then(function(model) {
			View.watch(req);
			View.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var model = {
			user: req.param('user'),
			video: req.param('video'),
			bid: req.param('bid'),
			watchTime: req.param('watchTime'),
		};
		View.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err)}
			else {
				View.count().where({video: req.param('video')})
				.exec(function(err, viewCount) {
					Video.update({id: req.param('video')}, {viewCount: viewCount})
					.then(function(result){
						Video.getOne(result[0].id)
						.then(function(video){
							if (err) return res.json(err, 400);
							Video.publishUpdate(video[0].id, video[0]);
						});
					})
					.catch(function(err){
						return res.negotiate(err);
					})

					//Bid.update({id: req.param('bid')}, {viewCount:viewCount}).exec(function afterwards(err, updated){
						//if (err) {return;}
						//else{Bid.publishUpdate(updated.toJSON())}
					//});

				});

				//VIEWER
				//EXTRA DIMENSION EX CREATOR & VIEWER
				var viewerModel = {};
				if (req.user){viewerModel._address = req.user.walletAddress}
				else{viewerModel._address = '0x818c3e3a61a5c2071841df187318e5be2c238201'}
				viewerModel._time = model.watchTime;

				//viewerContent -- PERCENTAGE OF SHARED CONTENT TOKEN
				viewerModel._id = model.video;
				if (viewerModel._time != 0 && viewerModel._time && req.user){blockchainService.createMultiDimensionalViewToken(viewerModel);}
				//console.log(viewerModel)
				//viewerGeneral -- GENERAL TOKEN
				viewerModel._id = 'general';
				if (viewerModel._time != 0 && viewerModel._time && req.user){blockchainService.createMultiDimensionalViewToken(viewerModel);}
				//console.log(viewerModel)

		  		Video.find({id:req.param('video')}).then(function(videoModel){
		  			User.find({id:videoModel[0].user}).then(function(userModel){

						//viewerChannel -- PERCENTAGE OF SHARED CHANNEL TOKEN
						viewerModel._id = userModel[0].walletAddress;
						if (viewerModel._time != 0 && viewerModel._time){blockchainService.createMultiDimensionalViewToken(viewerModel);}
						//console.log(viewerModel)

						//CREATOR
		  				var creatorModel = {};
						creatorModel._address = userModel[0].walletAddress;
						creatorModel._time = model.watchTime;

						//creatorContent
						creatorModel._id = model.video;
						if (creatorModel._time != 0 && creatorModel._time && req.user){blockchainService.createMultiDimensionalViewToken(creatorModel);}
						//console.log(viewerModel)

						//creatorChannel -- VIEWER PAYING ATTENTION
						creatorModel._id = model.video;
						if (req.user){creatorModel._id = req.user.walletAddress}
						else{creatorModel._id = '0x818c3e3a61a5c2071841df187318e5be2c238201'}
						if (creatorModel._time != 0 && creatorModel._time){blockchainService.createMultiDimensionalViewToken(creatorModel);}
						//console.log(viewerModel)

						//creatorGeneral
						viewerModel._id = 'general';
						if (creatorModel._time != 0 && creatorModel._time && req.user){blockchainService.createMultiDimensionalViewToken(creatorModel);}
						//console.log(viewerModel)

		  			});
		  		});
			
			}
		});
	}
};