var faker = require("faker");
var globals = require("./globals.js");

var videos = globals.videos.map(function(id,i){
	

	var title = faker.lorem.words();

	return {
		id: id,
		title: title,
		urlTitle: title.split(" ").join("-"),
		amazonUrl: sails.getBaseUrl() + "/videos/" + title.split(" ").join("-"),
		description: faker.lorem.paragraph(),
		user: globals.users[Math.floor(i / (globals.videos.length * globals.contests.length))],
		contest: globals.contest[Math.floor(i / (globals.videos.length))]
	}
});

module.exports = videos;