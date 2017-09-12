/**
 * ClickController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getByVideo: function(req, res) {
		Click.find()
		.where({video:req.param('id')})
		.then(function(model) {
			console.log(model)
			Click.watch(req);
			Click.subscribe(req, model);
			res.json(model);
		})
		.catch(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		console.log('CLICK!')
		var model = {
			user: req.param('user'),
			video: req.param('video'),
			bid: req.param('bid'),
		};

		Click.create(model)
		.exec(function(err, click) {
			if (err) {return console.log(err)}
			else {
				Click.count().where({video: req.param('video')})
				.exec(function(err, clickCount) {
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
				Click.publishCreate(click.toJSON());
				res.json(click);
			}
		});
		var clickModel = {
			video: model.video,
			user: '0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579'
		};
  		blockchainService.createView(viewModel);
	}
};