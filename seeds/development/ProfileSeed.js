var faker = require("faker");
var globals = require("./globals.js");

var profiles = Array.apply(null,Array(globals.users - 1)).map(function(a,i){
	return {user: i + 2};
})

profiles.unshift({
	picture: "images/zaxbys.png",
	user: 1
})

module.exports = profiles;