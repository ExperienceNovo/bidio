var crypto = require("crypto");

module.exports = {
	getAll: function(req, res) {
		User.getAll()
		.spread(function(models) {
			User.watch(req);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getBalance: function(req, res) {
		blockchainService.getBalance(req.param('address')).then(function(cre8coinBalance){
			
			//blockchainService.getMultiDimensionalTokenEvents({address:req.param('address')}).then(function(results){
			//TimeBalance as general total?
			blockchainService.getMultiDimensionalTokenBalance({address:req.param('address'), identifier:'general'}).then(function(results){
			//blockchainService.getTokenBalanceNew(req.param('address')).then(function(viewTokenBalance){
				//console.log('cre8coin:',cre8coinBalance, 'viewtoken:', results)

				//res.json({cre8coinBalance: cre8coinBalance, events:results})
				res.json({cre8coinBalance: cre8coinBalance, viewTokenBalance: results.balance, events:results.events})
				//res.json({cre8coinBalance: cre8coinBalance, viewTokenBalance: viewTokenBalance})
				//res.json({balance: cre8coin});
			});


		});
	},

	getPassports: function(req,res){
		/*
			getPassports
			user must be logged in, id is taken from session
			returns all passports of user associated w/ id
		*/
		id = req.user.id;
		User.findOne( id )
		.populate('passports')
		.then(function( user ){
			return res.json( user.passports );
		})
		.fail(function( err ){
			return res.json( err );
		})
	},

	removePassport: function(req,res){
		var id = req.user.id;
		var provider = req.param("provider");
		Passport.destroy({user: id, provider: provider})
		.then(function(passport){
			res.json(passport);
		})
		.fail(function(err){
			res.json(err);
		});
	},

	getMine: function(req,res){
		var me = req.user.id;
		User.findOne(me)
		.populate('profile')
		.populate('passports')
		.then(function(user){
			return res.json(user);
		})
		.catch(function(err){
			return res.negotiate(err);
		});
	},

	getSome: function(req,res){

		var limiting = req.param('limiting');
		var skipping = req.param('skipping');

		User.getSome(limiting,skipping)
		.then(function(users){
			User.watch(req);
			return res.json(users);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},

	getByUsername: function(req, res) {
		User.find()
		.populate('profile')
		.where({username: req.param('path')})
		.spread(function(model) {
			User.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getOne: function(req, res) {
		User.getOne(req.param('id'))
		.spread(function(model) {
			res.json(model);
		})
		.fail(function(err) {
			// res.send(404);
		});
	},

	create: function (req, res) {
		var model = {
			username: req.param('username'),
			email: req.param('email'),
			first_name: req.param('first_name'),
			passports: req.param('passports')
		};

		User.create(model)
		.exec(function(err, model) {
			if (err) {
				return console.log(err);
			}
			else {
				User.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	},

	update: function(req,res){
		var id = req.param('id');
		var model = {
			email: req.param('email'),
			username : req.param('username'),
			socialAccounts: req.param('socialAccounts')
		};

		User.update({id: id}, model)
		.then(function(model){
			User.publishUpdate(id, model);
			res.json(model);
		});

	},

	destroy: function(res,res){
		var id = req.param("id");
		User.destroy(id)
		.then(function(){
			return res.send(200);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},
	forgot: function(req,res){

		if (!req.param("email")){
			return res.negotiate("No email provided")
		}

		var email = req.param("email");
		var token;

		User.find({email: email})
		.populate("passports")
		.then(function(user){
			if (!user[0]){
				req.flash("error", "No user found with email address " + email);
				res.redirect("/forgot");
			}

			/*make sure user already has local auth setup*/
			var hasLocal = user[0].passports.filter(function(passport){
				return passport.protocol == "local";
			});
			if (!hasLocal.length){
				req.flash("error", "Account does not yet have a password set up");
				res.redirect("/forgot");
			}
			crypto.randomBytes(20, function(err,buf){
				if (err){
					return res.negotiate(err);
				}
				token = buf.toString('hex');
				var now = Date.now() + 3600000;
				User.update({email: email},{
					passwordResetToken: token,
					resetTokenExpiresAfter: now
				})	
				.then(function(user){
					var tokenUrl = 'https://www.bidio.co' + '/reset/' + token;
					var data = {tokenUrl: tokenUrl, username: user.firstName || user.email};
					console.log(data);
		            return emailService.sendTemplate('reset', user[0].email, 'Reset Password', data);
				})
				.then(function(response){
					//if (response[0].status != "sent"){
					//	return res.negotiate(response[0].reject_reason);
					//}
					/*send success message here*/
					return res.redirect("/forgot/success");
				})
				.fail(function(err){
					res.negotiate(err);
				});

			});
		});
	},

	reset: function(req,res){
		var token = req.param("token");
		var newPassword = req.param("password");
		User.find({passwordResetToken: token, resetTokenExpiresAfter: {">": Date.now() }})
		.populate("passports")
		.then(function(user){
			if (!user.length){
				req.flash("error", "Reset token is invalid or expired");
				res.redirect("/reset/" + token);
			}

			/*shouldnt have to throw an error here but make sure only users who have
			local auth setup can get here*/
			var localPassport = user[0].passports.filter(function(passport){
				return passport.protocol == "local";
			})[0];

			Passport.update({id: localPassport.id}, {password: newPassword})
			.then(function(user){
				if (!user.length){
					req.flash("error", "Password was not reset");
					res.redirect("/reset/" + token);
				}
				return res.redirect("/reset-success");
			})
			.fail(function(err){
				res.negotiate(err);
			});
		})
		.fail(function(err){
			res.negotiate(err);
		});
	}
};
