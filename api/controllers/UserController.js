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

	getMine: function(req,res){

		var me = req.user.id;

		User.findOne(me)
			.populate('profile')
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
			first_name: req.param('first_name')
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
			username : req.param('username')
		};
		
		console.log("model in controller is: " + model);
		console.log("model.email in controller is: " + model.email);
		console.log("model.username in controller is: " + model.username);
		
		
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
	}
};