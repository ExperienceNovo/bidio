/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

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
			if (err) {
				return console.log(err);
			}
			else {
				View.count().where({video: req.param('video')})
				.exec(function(err, viewCount) {
					console.log(viewCount)
					Video.update({id: req.param('video')}, {viewCount:viewCount}).exec(function afterwards(err, updated){
					  if (err) {
					    return;
					  }
					});
				});
				View.watch(req);
				View.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	}
};