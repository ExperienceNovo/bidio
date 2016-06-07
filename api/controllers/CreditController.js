/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getMine: (['req','res'],function(req, res) {
		//only session user == req.param.id
		Credit.find()
		.where({user: req.param('id')})
		.then(function(models) {
			Bid.watch(req);
			Bid.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err) {
			console.log(err);
			return res.negotiate(err);
		});
	}),


	create:(['req','res'], function (req, res) {

		var model = {
			amount: req.param('value'),
			user: req.param('user'),
		};

		Credit.create(model)
		.exec(function(err, bid) {
			if (err) {
				return console.log(err);
			}
			else {
				Credit.publishCreate(bid);
				res.json(bid);
			}
		});
	}),
};

