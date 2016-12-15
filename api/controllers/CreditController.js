/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getMine: function(req, res) {
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
	},


	create: function (req, res) {

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
	},

	siripe: function(req,res){
		var stripe = require("stripe")("sk_live_cwZWiJ0WBN6dLUh7uoFcq9Kv");
		var user= req.user.id;
		var email = req.param("email");
		var amount = req.param("amount");
		console.log(req.body)

		var transaction = {
			amount: Math.round(amount * 100),
		 	currency: "usd",
		  	source: req.param("token"),
		 	description: "Bidio -- Stripe -- email: " + email,
		};

		var uniqueKey = {idempotency_key: utilsService.guid()};
		stripe.charges.create(transaction, uniqueKey)
		.then(function(response){
			//work on credits here
			return Credit.create({stripeTransactionId: response.id, user: user, email: email, amount: amount});
		})
		.then(function(transaction){
			return res.ok(transaction);
		})
		.catch(function(err){
			return res.send(err.message,400);
		})
	},
};

