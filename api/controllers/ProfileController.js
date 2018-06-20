/**
 * ProfileController
 *
 * @description :: Server-side logic for managing profiles
 *
 */

module.exports = {
	update: function(req,res){
		var id = req.param('id');
		var model = {id: id};
		if (req.body.pictureUrl){model.pictureUrl = req.body.pictureUrl;}
		if (req.body.bannerUrl){model.bannerUrl = req.body.bannerUrl;}
		if (req.body.firstName){model.firstName = req.body.firstName;}
		if (req.body.lastName){model.lastName = req.body.lastName;}
		if (req.body.description){model.description = req.body.description;}
		if (req.body.companyName){model.companyName = req.body.companyName;}
		if (req.body.companyUrl){model.companyUrl = req.body.companyUrl;}
		if (req.body.isSponsor){model.isSponsor = req.body.isSponsor;}
		if (req.body.isTrusted){model.isTrusted = req.body.isTrusted;}
		if (req.body.user){model.user = req.body.user;}
		if (req.body.socialAccounts){model.socialAccounts = req.body.socialAccounts;}
		Profile.update({id: id}, model)
		.then(function(){res.send(200);})
		.catch(function(err){res.negotiate(err);});
	}
};
