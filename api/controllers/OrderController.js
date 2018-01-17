var crypto = require("crypto");
module.exports = {
	create: function(req, res) {
		//TODO -- REMOVE BACKEND
		blockchainService.createOrder(req.query.member, req.query.orderExchangeAmount, req.query.orderExchangeIdentifier, req.query.orderExchangeAmount1, req.query.orderExchangeIdentifier1)).then(function(model){
			res.json(model);
		});
	},
};
