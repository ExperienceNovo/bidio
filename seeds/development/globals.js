/*
# of users, and # of resource per user
*/

var faker = require("faker");
var ObjectId = require("sails-mongo").mongo.objectId;

var getId = sails.config.models.connection == 'localDiskDb' ?

	(function(){
		var i = 1;
		return function(){
			return i++;
		}
	})()

	:

	function(){
		return ObjectId(1).toJSON();
	}


var amounts = {
	users: 10,
	videos: 3,
	contests: 1,
	profiles: 1
};

var users = Array.apply(null,Array(amounts.users)).map(function(){
	return getId()
});

var soccerNames = Array.apply(null,Array(3)).map(function(){ return [faker.name.firstName(), faker.name.lastName()].join(" ") })

var videos = Array.apply(null,Array(amounts.users * amounts.videos * amounts.contests)).map(function(){
	return getId()
});

var contests = Array.apply(null,Array(amounts.users * amounts.contests)).map(function(){
	return getId()
});

var profiles = Array.apply(null,Array(amounts.users * amounts.profiles)).map(function(){
	return getId()
});

module.exports = {
	users: users,
	videos: videos,
	contests: contests,
	profiles: profiles,
	passports: [ObjectId(1).toJSON()],
	soccerNames: soccerNames
};