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
				//View.watch(req);
				//View.publishCreate(model.toJSON());
				//res.json(model);

				var viewModel = {
					watchTime: 60000,
					video: model.video,
					//user: model.user,
					user: req.user.walletAddress || null
				};

				//viewToken viewer
		  		blockchainService.createView(viewModel);
		  		blockchainService.createViewNew(viewModel);
				blockchainService.createViewTESTNET(viewModel);


		  		//viewToken creator
		  		Video.find({id:req.param('video')}).then(function(videoModel){

		  			User.find({id:videoModel.user}).then(function(userModel){
		  				var viewModel = {
							watchTime: 60000,
							video: model.video,
							user: userModel.walletAddress
						};
		  				blockchainService.createView(viewModel);
		  				blockchainService.createViewNew(viewModel);
		  			});

		  		});


			}
		});
		
	}
};