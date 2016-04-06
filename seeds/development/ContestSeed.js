var faker = require("faker");
var globals = require("./globals.js");

var contests = Array.apply(null,Array(globals.users * globals.contests)).map(function(a,i){

	var title = faker.lorem.words();
	var content = Array.apply(null,Array(3)).map(function(){return faker.lorem.paragraph()}).join("<br>");

	return {
		id:i+2,
		title: title,
		contestContent: content,
		urlTitle: title.split(" ").join("-"),
		user: Math.floor(i / globals.contests) + 2
	}
});

contests.unshift({
	id: 1,
	title: "Zaxby's",
	contestContent: "Zaxby's Contest",
	urlTitle: "zaxbys",
	user: 1
});

module.exports = contests;