/**
 *CampaignController
 *
 * @description :: Server-side logic for managing Campaigns
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	check: function(req,res){

		var params = req.params.all();

		Campaign.find(params)
		.then(function(result){
			if (result.length){
				return res.send(400, "Record already exists");
			}
			return res.send(200);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},

	getAll: function(req, res) {
		Campaign.getAll()
		.spread(function(models) {
			Campaign.watch(req);
			Campaign.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);			
		});
	},

	getMine: function(req, res) {
		var id = req.user.id;
		Campaign.find({user: id})
		.then(function(models) {
			Campaign.watch(req);
			Campaign.subscribe(req, models);
			return res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);
		});
	},

	getOne: function(req, res) {
		Campaign.getOne(req.param('id'))
		.spread(function(model) {
			Campaign.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getFeatured: function(req, res) {
		Campaign.find({isFeatured:true})
		.then(function(model) {
			Campaign.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getByMember: function(req, res) {
		Campaign.find({user:req.param('id')})
		.then(function(model) {
			Campaign.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getByUrlTitle: function(req, res) {
		Campaign.findOne({urlTitle: req.param('path')})
		.populate('user')
		.populate('bids', {where: {isActive: true}})
		.then(function(campaign){
			if (!campaign.published){
				//error handling here
				return res.redirect("/campaigns")
			}

			return [campaign, Promise.all(
				campaign.bids.map(function(bid){
					return Video.findOne(bid.video)
				})
			)];

		})
		//gotta work on this -->
		.spread(function(campaign, videos){
			campaign = campaign.toObject();
			campaign.bids.forEach(function(bid,i){
				bid.video = videos[i];
			})
			return campaign;
		})
		.then(function(campaign){
			/*get profile*/
			return [campaign, Profile.findOne({user: campaign.user.id || campaign.user._id})]
		})
		.spread(function(campaign,profile){
			if (!profile){
				return campaign;
			}
			campaign.user.profile = profile;
			return campaign;
		})
		.then(function(campaign){
			/*add users to videos*/
			//return [campaign]
			return [campaign, Promise.all(
				campaign.bids.map(function(bid){
					return User.findOne({id: bid.video.user});
				})
			)]
		})
		.spread(function(campaign, users){
			//console.log(campaign.bids)
			campaign.bids.forEach(function(bid,i){
				bid.video.user = users[i]
			});

			return campaign;
		})
		.then(function(model) {
			Campaign.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.negotiate(err);
		});
	},

	// getSubmittedVideos: function(req, res) {
	// 	Campaign.findOne(req.param('id'))
	// 	.populate('submittedVideos')
	// 	.spread(function(model) {
	// 		Campaign.subscribe(req, model);
	// 		res.json(model);
	// 	})
	// 	.fail(function(err) {
	// 		res.send(404);
	// 	});
	// },

	create: function (req, res) {

		if (req.user.id != req.param("user")){
			return res.send(400, "Wrong User");
		}

		var model = {
			title: req.param('title'),
			videoUrl: req.param('videoUrl'),
			bannerUrl: req.param('bannerUrl'),
			campaignImageUrl: req.param('campaignImageUrl'),
			published: req.param('published'),
			price: req.param('price'),
			intro: req.param('intro'),
			prompt: req.param('prompt'),
			urlTitle: req.param('urlTitle'),
			campaignContent: req.param('campaignContent'),
			user: req.param('user')
		};

		Campaign.create(model)
		.exec(function(err, campaign) {
			if (err) {
				return console.log(err);
			}
			else {
				Campaign.publishCreate(campaign);
				res.json(campaign);
			}
		});
	},

	update: function(req,res){

		var id = req.param('id');

		var model = {};

		if(req.param('title')){
	    	model.title = req.param('title');
	    }

		if(req.param('doesRedirect')){
	    	model.doesRedirect = req.param('doesRedirect');
	    }

		if(req.param('price')){
	    	model.price = req.param('price');
	    }

		if(req.param('intro')){
	    	model.intro = req.param('intro');
	    }

		if(req.param('prompt')){
	    	model.prompt = req.param('prompt');
	    }
		
		if(req.param('campaignContent')){
	    	model.campaignContent = req.param('campaignContent');
	    }

		if(req.param('videoUrl')){
	    	model.videoUrl = req.param('videoUrl');
	    }

		if(req.param('published')){
	    	model.published = req.param('published');
	    }

		if(req.param('bannerUrl')){
	    	model.bannerUrl = req.param('bannerUrl');
	    }

		if(req.param('campaignImageUrl')){
	    	model.campaignImageUrl = req.param('campaignImageUrl');
	    }

		if(req.param('user')){
	    	model.user = req.param('user');
	    }

		if(req.param('redirectUrl')){
	    	model.redirectUrl = req.param('redirectUrl');
	    }

	    if(req.param('contributionGoal')){
	    	model.contributionGoal = req.param('contributionGoal')
	    }

	    if(req.param('maxContributionPerVideo')){
	    	model.maxContributionPerVideo = req.param('maxContributionPerVideo')
	    }

		Campaign.update({id: id}, model)
		.then(function(model){
			Campaign.publishUpdate(model[0].id, model);
			res.json(model);
		});


	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}
		//console.log('campaign')

		// Otherwise, find and destroy the model in question
		Campaign.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Campaign.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Campaign.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};
