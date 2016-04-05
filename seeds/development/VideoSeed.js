var faker = require("faker");

var videos = Array.apply(null,Array(30)).map(function(a,i){

	var title = faker.lorem.words();

	return {
		id: i + 1,
		title: title,
		urlTitle: title.split(" ").join("-"),
		amazonUrl: title.split(" ").join("-"),
		description: faker.lorem.paragraph(),
		user: 1,
		contest: Math.floor((i + 1) / 3)
	}
})


module.exports = videos;