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
				//View.watch(req);
				//View.publishCreate(model.toJSON());
				//res.json(model);
				var viewModel = {
					watchTime: model.watchTime,
					video: model.video,
				};
				if (req.user){viewModel.user=req.user.walletAddress}
				else{viewModel.user='anon'}
				//gotta work
				//this method isnt really effecient ->re general, multidemsional viewtoken..
				/*viewModel = {
					watchTime: 60000,
					content: model.video,
					channel: model.video,
				}*/
				//total viewtoken balance --

				//Legacy viewToken viewer
		  		//blockchainService.createView(viewModel);

				//viewtokens
				//-->identifer-->video, channel, general, viewer? 
				//content
				if (viewModel.watchTime != 0){
					blockchainService.createMultiDimensionalViewToken(viewModel);
				}
				//channel
				//blockchainService.createMultiDimensionalViewToken(viewModel);
				//general
				viewModel.video = 'general'
				if (viewModel.watchTime != 0){
					blockchainService.createMultiDimensionalViewToken(viewModel);
				}

				
				//blockchainService.createViewTESTNET(viewModel);

		  		//viewToken creator
		  		//channel token
		  		Video.find({id:req.param('video')}).then(function(videoModel){
		  			User.find({id:videoModel[0].user}).then(function(userModel){
		  				var viewModelChannel = {
							watchTime: model.watchTime,
							video: userModel[0].walletAddress,
						};
						if (req.user){viewModelChannel.user=req.user.walletAddress}
						else{viewModelChannel.user='anon'}
						//var viewModelCreaterToken = {
						//	watchTime: model.watchTime,
						//	video: userModel[0].walletAddress,
						//	user: userModel[0].walletAddress
						//};
						//channeltoken
						console.log(viewModelChannel);
						if (viewModelChannel.watchTime != 0){
							blockchainService.createMultiDimensionalViewToken(viewModelChannel);
						}
						//blockchainService.createMultiDimensionalViewToken(viewModelCreaterToken);
		  			});
		  		});
			
			}
		});
	}
};