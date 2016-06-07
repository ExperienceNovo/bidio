module.exports = {
	getAll: (['req','res'],function(req, res) {
		User.getAll()
		.spread(function(models) {
			User.watch(req);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	}),

	getPassports: (['req','res'],function(req,res){
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
	}),

	removePassport: (['req','res'], function(req,res){
		id = req.user.id;
		provider = req.param("provider");

		Passport.destroy({user: id, provider: provider})
			.then(function(passport){
				res.json(passport);
			})
			.fail(function(err){
				res.json(err);
			});
	}),

	getMine: (['req','res'], function(req,res){

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

	}),

	getSome: (['req','res'], function(req,res){

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
	}),

	getByUsername:(['req','res'], function(req, res) {
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
	}),

	getOne:(['req','res'], function(req, res) {
		User.getOne(req.param('id'))
		.spread(function(model) {
			res.json(model);
		})
		.fail(function(err) {
			// res.send(404);
		});
	}),

	create: (['req','res'], function (req, res) {
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
	}),

	update: (['req','res'], function(req,res){
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


	}),

	destroy: (['req','res'], function(res,res){
		var id = req.param("id");
		User.destroy(id)
			.then(function(){
				return res.send(200);
			})
			.catch(function(err){
				return res.negotiate(err);
			})
	})
};
