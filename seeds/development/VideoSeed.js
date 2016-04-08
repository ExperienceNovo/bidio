var faker = require("faker");
var globals = require("./globals.js");

var videos = globals.videos.map(function(id,i){


	var title = faker.lorem.words();

	return {
		id: id,
		title: title,
		urlTitle: title.split(" ").join("-"),
		amazonUrl: "/videos/" + title.split(" ").join("-"),
		description: faker.lorem.paragraph(),
		user: globals.users[ Math.floor( i * ( globals.users.length / globals.videos.length ) ) ],
		contest: globals.contests[ Math.floor( i * ( globals.contests.length / globals.videos.length ) ) ],
		approved: true,
		isNew: false
	}
});

module.exports = videos;