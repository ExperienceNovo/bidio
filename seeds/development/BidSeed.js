var globals = require("./globals.js");

var bids = globals.bids.map(function(bid, i){

	return {
		video: globals.videos[ Math.floor( i * ( globals.videos.length / globals.bids.length ) ) ],
		campaign: globals.campaigns[ Math.floor( i * ( globals.campaigns.length / globals.bids.length ) ) ],
		user: globals.users[ Math.floor( i * ( globals.users.length / globals.bids.length) ) ],
		isActive: true,
		isAccepted: true,
		value: "0.50"
	}

});

module.exports = bids;
