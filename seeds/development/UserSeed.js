var faker = require("faker");
var globals = require("./globals.js");

var users = globals.users.slice(4).map(function(id,i){
	return {
		id: id,
		username: faker.internet.userName(),
		email: faker.internet.email()
	}
})

users.unshift({
	email: "test@test.com",
	username: "Zaxby's",
	isAdmin: true,
	id: globals.users[0]
});

globals.users.slice(1,4).forEach(function(id,i){

	users.unshift({
		id: id,
		email: globals.soccerNames[i].split(" ").join("") + "@gmil.com",
		username: globals.soccerNames[i].split(" ").join(""),
	})
})



module.exports = users;