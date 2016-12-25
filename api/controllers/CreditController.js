/**
 * CreditController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var stripe = require('stripe');
module.exports = {
	
	getMine: function(req, res) {
		//only session user == req.param.id
		var me = req.user.id;
		Credit.find()
		.where({user: me})
		.then(function(models) {
			Credit.watch(req);
			Credit.subscribe(req, models);
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

	stripe: function(req,res){
		var stripe = require("stripe")("sk_test_7qlDJ93FmNwU7xP4zHRqLKlk");
		var user = req.user.id;
		var email = req.param("email");
		var amount = req.param("amount");

		var transaction = {
			amount: Math.round(amount * 100 * 0.88),
		 	currency: "usd",
		  	source: req.param("token"),
		 	description: "Bidio -- Stripe -- email: " + email,
		};

		var uniqueKey = {idempotency_key: utilsService.guid()};
		stripe.charges.create(transaction, uniqueKey)
		.then(function(response){
			return Credit.create({stripeTransactionId: response.id, user: user, email: email, value: amount  * 0.88});
		})
		.then(function(transaction){
			return res.ok(transaction);
		})
		.catch(function(err){
			return res.send(err.message,400);
		})
	},

	cashOut: function(req,res){},
	
};

