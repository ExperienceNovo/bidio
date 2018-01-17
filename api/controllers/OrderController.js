var crypto = require("crypto");
module.exports = {
	create: function(req, res) {
		//TODO -- REMOVE BACKEND
		console.log(req)
		console.log(req.body.params)
		console.log(req.query)

		console.log(req.body.params.member, req.body.params.orderExchangeAmount, req.body.params.orderExchangeIdentifier, req.body.params.orderExchangeAmount1, req.body.params.orderExchangeIdentifier1)
		blockchainService.createOrder(req.body.params.member, req.body.params.orderExchangeAmount, req.body.params.orderExchangeIdentifier, req.body.params.orderExchangeAmount1, req.body.params.orderExchangeIdentifier1)//.then(function(model){
			//res.json(model);
		//});
	},
};
