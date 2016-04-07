/*
# of users, and # of resource per user
*/

var ObjectId = require("sails-mongo").mongo.objectId;

var amounts = {
	users: 10,
	videos: 3,
	contests: 1,
	profiles: 1
};

var users = Array.apply(null,Array(amounts.users)).map(function(){
	return ObjectId(1);
});

var videos = Array.apply(null,Array(amounts.users * amounts.videos * amounts.contests)).map(function(){
	return ObjectId(1);
});

var contests = Array.apply(null,Array(amounts.users * amounts.contests)).map(function(){
	return ObjectId(1);
});

var profiles = Array.apply(null,Array(amounts.users * amounts.profiles)).map(function(){
	return ObjectId(1);
});

module.exports = {
	users: users,
	videos: videos,
	contests: contests,
	profiles: profiles,
	passports: [ObjectId{1}]
};