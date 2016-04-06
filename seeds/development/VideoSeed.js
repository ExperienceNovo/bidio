var faker = require("faker");
var globals = require("./globals.js");

var videos = Array.apply(null,Array(globals.videos * globals.users * globals.contests)).map(function(a,i){

	var title = faker.lorem.words();

	return {
		id: i + 1,
		title: title,
		urlTitle: title.split(" ").join("-"),
		amazonUrl: sails.getBaseUrl() + "/videos/" + title.split(" ").join("-"),
		description: faker.lorem.paragraph(),
		user: Math.floor(i / (globals.videos * globals.contests)) + 1,
		contest: Math.floor(i / (globals.videos)) + 1
	}
});

module.exports = videos;