var faker = require("faker");
var globals = require("./globals.js");

var profiles = globals.profiles.slice(1).map(function(id,i){

	i = i + 1

	return {
		user: globals.users[i]
	};

});

profiles.unshift({
	picture: "images/zaxbys.png",
	user: globals.users[0]
});

module.exports = profiles;