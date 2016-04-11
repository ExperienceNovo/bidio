/**
 *ContestController
 *
 * @description :: Server-side logic for managing Contests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');

module.exports = {

	check: function(req,res){

		var params = req.params.all();

		Contest.find(params)
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
		Contest.getAll()
		.spread(function(models) {
			Contest.watch(req);
			Contest.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);			
		});
	},

	getMine: function(req, res) {

		var id = req.user.id;

		Contest.find({user: id})
		.then(function(models) {
			Contest.watch(req);
			Contest.subscribe(req, models);
			return res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);
		});
	},

	getOne: function(req, res) {
		Contest.getOne(req.param('id'))
		.spread(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getByMember: function(req, res) {
		Contest.find()
		.where({user:req.param('id')})
		.then(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	getByUrlTitle: function(req, res) {
		Contest.findOne({urlTitle: req.param('path')})
		.populate('user')
		.populate('videos', {where: {approved: true}})
		.then(function(contest){

			if (!contest.published){
				//error handling here
				return res.redirect("/contests")
			}

			return [contest, Profile.findOne({user: contest.user.id || contest.user._id})]
		})
		.spread(function(contest,profile){
			if (!profile){
				return contest;
			}
			contest = contest.toObject();
			contest.user.profile = profile;
			return contest;
		})
		.then(function(contest){

			/*add users to videos*/
			return Promise.all(
				contest.videos.map(function(video){
					return User.find({id: video.user})
						.then(function(user){
							video.user = user[0];
							return video;
						})
				})
			)
			.then(function(videos){
				contest.videos = videos;
				return contest;
			})
		})
		.then(function(model) {
			Contest.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	// getSubmittedVideos: function(req, res) {
	// 	Contest.findOne(req.param('id'))
	// 	.populate('submittedVideos')
	// 	.spread(function(model) {
	// 		Contest.subscribe(req, model);
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
			contestContent: req.param('contestContent'),
			user: req.param('user')
		};

		Contest.create(model)
		.exec(function(err, contest) {
			if (err) {
				return console.log(err);
			}
			else {
				Contest.publishCreate(contest);
				res.json(contest);
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
			contestContent: req.param('contestContent'),
			user: req.param('user')
		};

    if(req.param('contributionGoal')){
    	model.contributionGoal = req.param('contributionGoal')
    }

    if(req.param('maxContributionPerVideo')){
    	model.maxContributionPerVideo = req.param('maxContributionPerVideo')
    }

		Contest.update({id: id}, model)
		.then(function(model){
			Contest.publishUpdate(model[0].id, model);
			res.json(model);
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
