var faker = require("faker");
var globals = require("./globals.js");
var sprintf = require("sprintf-js").sprintf;

var contests = globals.contests.slice(1).map(function(id,i){

	i = i + 1

	var title = faker.lorem.words();
	var content = Array.apply(null,Array(3)).map(function(){return faker.lorem.paragraph()}).join(" ");

	return {
		id:id,
		videoUrl: "/videos/" + faker.lorem.words().split(" ").join("-"),
		published: true,
		title: title,
		contestContent: content,
		urlTitle: title.split(" ").join("-"),
		user: globals.users[ Math.floor(i * ( globals.users.length / globals.contests.length) ) ],
		bannerUrl: "http://placehold.it/1500x350?text=Banner",
		prompt: faker.lorem.words(),
		intro: faker.lorem.paragraph(),
		price: sprintf("%.2f", Math.random())
	}
});

var content = Array.apply(null,Array(3)).map(function(){return faker.lorem.paragraph()}).join(" ");

contests.unshift({
	id: globals.contests[0],
	videoUrl: "/videos/" + faker.lorem.words().split(" ").join("-"),
	published: true,
	title: "Zaxby's Sponsors Railhawks Tryouts",
	maxContributionPerVideo: "199.00",
	intro: "Zaxby's invites kids ages 7-15 to submit video auditions for the Carolina RailHawks' summer camps! Each time a person viewing your video clicks on the contest link, we put $0.50 towards the cost for you to attend summer camp. Each video submission may recieve up to the full cost the summer program ($199), and we have pledged to contribute up to $7,000 in total. Come and show your passion for Soccer!",
	contestContent: content,
	bannerUrl: "http://placehold.it/1500x350?text=Banner",
	urlTitle: "zaxbys-railhawks",
	prompt: "Buy tickets to support future champions",
	user: globals.users[0],
	price: "0.50"
});

module.exports = contests;