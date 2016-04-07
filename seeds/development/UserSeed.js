var faker = require("faker");
var globals = require("./globals.js");

var users = Array.apply(null, Array(globals.users - 1)).map(function(a,i){
	return {
		//id: i + 2,
		//_id: i + 2,
		username: faker.internet.userName(),
		email: faker.internet.email()
	}
})

users.unshift({
	email: "test@test.com",
	username: "Zaxby's",
	isAdmin: true,
	//id: 1,
	//_id: 1
});

module.exports = users;