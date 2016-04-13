/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	update: function(req,res){

		var id = req.param('id');

		var model = {id: id};

		if (req.body.picture){
			model.picture = req.body.picture;
		}

		if (req.body.firstName){
			model.firstName = req.body.firstName;
		}

		if (req.body.lastName){
			model.lastName = req.body.lastName;
		}

		if (req.body.description){
			model.description = req.body.description;
		}

		if (req.body.companyName){
			model.companyName = req.body.companyName;
		}

		if (req.body.companyUrl){
			model.companyUrl = req.body.companyUrl;
		}

		if (req.body.isSponsor){
			model.isSponsor = req.body.isSponsor;
		}

		if (req.body.isTrusted){
			model.isTrusted = req.body.isTrusted;
		}

		if (req.body.user){
			model.user = req.body.user;
		}

		Profile.update({id: id}, model)
			.then(function(){
				res.send(200);
			})
			.catch(function(err){
				res.negotiate(err);
			});

	}

};

