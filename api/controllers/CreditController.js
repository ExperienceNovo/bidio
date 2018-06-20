/**
 * CreditController
 *
 * @description :: Server-side logic for managing USD(Stripe Credit Card) based Credit
 *
 */

var stripe = require('stripe');
module.exports = {
	
	getMine: function(req, res) {
		//TODO: only session user == req.param.id
		var me = req.user.id;
		Credit.find()
		.where({user: me})
		.then(function(models) {
			Credit.watch(req);
			Credit.subscribe(req, models);
			res.json(models);
		})
		.catch(function(err) {console.log(err);return res.negotiate(err);});
	},

	create: function (req, res) {
		var model = {
			amount: req.param('value'),
			user: req.param('user'),
		};
		Credit.create(model)
		.exec(function(err, bid) {
			if (err) {return console.log(err);}
			else {
				Credit.publishCreate(bid);
				res.json(bid);
			}
		});
		blockchainService.createCredit(model);
	},

	stripe: function(req,res){
		//WARNING: CREDENTIALS
		var stripe = require("stripe")(process.env.SECRET.STRIPE);
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
			User.find({id:user}).then(function(model){
				blockchainService.createCredit(model, amount)
			});
		})
		.then(function(transaction){return res.ok(transaction);})
		.catch(function(err){return res.send(err.message,400);})
	},

	cashOut: function(req,res){},
	
};

