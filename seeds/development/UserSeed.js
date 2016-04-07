var faker = require("faker");
var globals = require("./globals.js");

var users = globals.users.slice(1).map(function(id,i){
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

module.exports = users;