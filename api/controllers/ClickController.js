/**
 * ClickController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getByVideo:(['req','res'], function(req, res) {
		Click.find()
		.where({video:req.param('id')})
		.then(function(model) {
			Click.watch(req);
			Click.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	}),

	create:(['req','res'], function (req, res) {

		var model = {
			user: req.param('user'),
			video: req.param('video'),
			bid: req.param('bid'),
		};

		Click.create(model)
		.exec(function(err, model) {
			if (err) {return console.log(err)}
			else {
				Click.count().where({video: req.param('video')})
				.exec(function(err, viewCount) {
					Video.update({id: req.param('video')}, {clickCount:clickCount}).exec(function afterwards(err, updated){
						if (err) {return}
						//else{Video.publishUpdate(updated.toJSON())}
					});
					Bid.update({id: req.param('bid')}, {clickCount:clickCount}).exec(function afterwards(err, updated){
						if (err) {return}
						//else{Bid.publishUpdate(updated.toJSON())}
					});
				});
				Click.watch(req);
				Click.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	})
};