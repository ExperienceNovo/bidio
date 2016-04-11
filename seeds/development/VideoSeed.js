var faker = require("faker");
var globals = require("./globals.js");
var range = {
	click: 200,
	view: 1000
};


var videos = globals.videos.slice(3).map(function(id,i){

	i = i + 3;

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
		isNew: false,
		clickCount: Math.floor(Math.random() * range.click),
		viewCount: Math.floor(Math.random() * range.view)
	}
});

globals.videos.slice(0,3).forEach(function(id,i){

	var title = faker.lorem.words();

	videos.unshift(
		{
			id: id,
			title: globals.soccerNames[i] + "'s railhawks soccer tryout",
			urlTitle: title.split(" ").join("-"),
			amazonUrl: "/videos/" + title.split(" ").join("-"),
			description: "Hi my name is " + globals.soccerNames[i] + " and this is my soccer tryout for the Carolina Railhawks summer camp. Please watch and share to help me get in!",
			user: globals.users[ i + 1 ],
			contest: globals.contests[ Math.floor( i * ( globals.contests.length / globals.videos.length ) ) ],
			approved: true,
			isNew: false,
			clickCount: Math.floor(Math.random() * range.click),
			viewCount: Math.floor(Math.random() * range.view)
		}
	)
})

module.exports = videos;