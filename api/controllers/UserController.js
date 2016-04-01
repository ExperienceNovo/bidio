module.exports = {
	getAll: function(req, res) {
		User.getAll()
		.spread(function(models) {
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
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
		console.log(id);
		var model = {
			email: req.param('email'),
			username : req.param('username')
			//urlTitle: req.param('urlTitle'),
			//contestContent: req.param('contestContent'),
			//user: req.param('user')
		};
		
		console.log("model in controller is: " + model);
		console.log("model.email in controller is: " + model.email);
		console.log("model.username in controller is: " + model.username);
		
		
		User.update({id: id}, model)
		.then(function(model){
			User.publishUpdate(id, model);
			res.json(model);
		});
		
		
	}
};