var faker = require("faker");

var users = Array.apply(null, Array(20)).map(function(){
	return {
		username: faker.internet.userName(),
		email: faker.internet.email()
	}
})

users.unshift({
	email: "test@test.com",
	username: "test",
	isAdmin: true,
	id: 1
});

module.exports = users;