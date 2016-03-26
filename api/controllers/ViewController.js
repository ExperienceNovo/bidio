/**
 * ViewController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getAll: function(req, res) {
		View.find()
		.where({user: req.param('user')})
		.populateAll()
		.then(function(model) {
			View.watch(req);
			View.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404,err);
		});

	},

	create: function (req, res) {
		var model = {
			user: req.param('user'),
			video: req.param('video'),
			date: req.param('date'),
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