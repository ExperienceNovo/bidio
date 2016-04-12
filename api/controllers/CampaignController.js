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

	getByMember: function(req, res) {
		Campaign.find()
		.where({user:req.param('id')})
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
		.populate('videos', {where: {approved: true}})
		.then(function(campaign){

			if (!campaign.published){
				//error handling here
				return res.redirect("/campaigns")
			}

			return [campaign, Profile.findOne({user: campaign.user.id || campaign.user._id})]
		})
		.spread(function(campaign,profile){
			if (!profile){
				return campaign;
			}
			campaign = campaign.toObject();
			campaign.user.profile = profile;
			return campaign;
		})
		.then(function(campaign){

			/*add users to videos*/
			return Promise.all(
				campaign.videos.map(function(video){
					return User.find({id: video.user})
						.then(function(user){
							video.user = user[0];
							return video;
						})
				})
			)
			.then(function(videos){
				campaign.videos = videos;
				return campaign;
			})
		})
		.then(function(model) {
			Campaign.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
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

		var model = {
			title: req.param('title'),
			videoUrl: req.param('videoUrl'),
			bannerUrl: req.param('bannerUrl'),
			published: req.param('published'),
			price: req.param('price'),
			intro: req.param('intro'),
			prompt: req.param('prompt'),
			urlTitle: req.param('urlTitle'),
			campaignContent: req.param('campaignContent'),
			user: req.param('user')
		};

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
