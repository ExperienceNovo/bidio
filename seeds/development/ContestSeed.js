var faker = require("faker");

var contests = Array.apply(null,Array(9)).map(function(a,i){

	var title = faker.lorem.words();
	var content = Array.apply(null,Array(3)).map(function(){return faker.lorem.paragraph()}).join("<br>");

	return {
		id:i+2,
		title: title,
		contestContent: content,
		urlTitle: title.split(" ").join("-"),
		user: 1
	}
});

contests.unshift({
	id: 1,
	title: "Zaxby's",
	title2: "Sponsors Carolina RailHawks Youth Programs",
	contestContent: "Sponsoring the Carolina RailHawks Youth Program",
	urlTitle: "zaxbys-railhawks",
	user: 1
});

module.exports = contests;