module.exports = {
	attributes: {
		user: {
			model: 'user',
			required: true
		},
		firstName: {
            type: 'string',
        },
		lastName: {
            type: 'string',
        },
		address: {
            type: 'string',
        },
	    addressAdditional: {
            type: 'string',
        },
		city: {
            type: 'string',
        },
		state: {
            type: 'json',
        },
		zip: {
            type: 'string',
        },
		displayName: {
            type: 'string',
        },
		webAddress: {
            type: 'string',
        },
		description: {
            type: 'string',
        }
	},

	getAll: function() {
		return User.find()
		.then(function (models) {
			return [models];
		});
	},

	getOne: function(id) {
		return User.findOne(id)
		.populate('passports')
		.then(function (model) {
			return [model];
		});
	}
};