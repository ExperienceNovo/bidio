/**
* UserInformationInformationController
*
* @description :: Server-side logic for managing UserInformations
* @help        :: See http://links.sailsjs.org/docs/controllers
*/
var _ = require('lodash');


module.exports = {

	getAll: function(req, res) {
		UserInformation.getAll()
		.spread(function(models) {
			UserInformation.watch(req);
			UserInformation.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		UserInformation.getOne(req.param('id'))
		.spread(function(model) {
			UserInformation.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getByUser: function(req, res) {
		//need a check in the api that only the logged in user or admin can access their records
		UserInformation.find()
		.where({user: req.param('id')})
		.sort('createdAt DESC')
		.then(function(model) {
			UserInformation.watch(req);
			UserInformation.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404,err);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var	firstName = req.param('firstName');
		var	lastName = req.param('lastName');
		var address = req.param('address');
		var addressAdditional = req.param('addressAdditional');
		var city = req.param('city');
		var state = req.param('state');
		var zip = req.param('zip');
		var displayName = req.param('displayName');
		var webAddress = req.param('webAddress');
		var description = req.param('description');

		var model = {
			user: userId,
			firstName: firstName,
			lastName: lastName,
			address: address,
			addressAdditional: addressAdditional,
			city: city,
			state: state,
			zip: zip,
			displayName: displayName,
			webAddress: webAddress,
			description: description,
		};

		console.log(model);

		UserInformation.create(model)
		.exec(function(err, userinformation) {
			if (err) {
				return console.log(err);
			}
		});
	},

	update: function(req, res) {
		var id = req.param('id');

		var	firstName = req.param('firstName');
		var	lastName = req.param('lastName');
		var address = req.param('address');
		var addressAdditional = req.param('addressAdditional');
		var city = req.param('city');
		var state = req.param('state');
		var zip = req.param('zip');
		var displayName = req.param('displayName');
		var webAddress = req.param('webAddress');
		var description = req.param('description');

		var model = {
			firstName: firstName,
			lastName: lastName,
			address: address,
			addressAdditional: addressAdditional,
			city: city,
			state: state,
			zip: zip,
			displayName: displayName,
			webAddress: webAddress,
			description: description,
		};

		UserInformation.update( {id: id}, model).exec(function afterwards(err, updated){
			if (err) {
		    	return;
		    }
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		UserInformation.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			UserInformation.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}
				UserInformation.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
};

