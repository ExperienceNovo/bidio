var web3 = require('web3');
var Web3 = require('web3');
var web3 = new Web3();
var Q = require('q');

var Personal = require('web3-eth-personal');//ec2-54-212-193-239.us-west-2.compute.amazonaws.com
var personal = new Personal('http://ec2-54-212-193-239.us-west-2.compute.amazonaws.com:8545');//http://172.31.19.250

if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
else {web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-54-212-193-239.us-west-2.compute.amazonaws.com:8545"));}
web3.setProvider(new Web3.providers.HttpProvider('http://ec2-54-212-193-239.us-west-2.compute.amazonaws.com:8545'));
//ws://172.31.19.250:8546

//WARNING: sketch security --> need governace code.
//SOLVE THE GAS PROBLEM!
personal.unlockAccount("0xc2bb26082403cc1fb0e75769559c85be14ae95a3","create", 1000000)
var masterAccount = '0xc2bb26082403cc1fb0e75769559c85be14ae95a3';

//ERC88
var viewTokenAddress = '0xF0f36c3A545fD00191ED8392028e94eE6d379f17';

//BINARYMARKET
var marketAddress = '0xc74B8C27fBaD80eDbAb2D9549D37EBfd54ca23D0'

//MULTIDMARKET
//THIS IS REAL INNOVATION
//var marketAddress = '0x12fd8bb95ccdcab34c257a4e80727154e21081ef';

var contentAddress = '0x499a2c6452818F6c34aE74e2c4b00C4a65c40D22';
var userAddress = '0x499a2c6452818F6c34aE74e2c4b00C4a65c40D22';
var bidAddress = '0x499a2c6452818F6c34aE74e2c4b00C4a65c40D22';

module.exports = {

	createOrder: function(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1){
   		var marketContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_member","type":"address"},{"name":"_orderExchangeAmount","type":"int256"},{"name":"_orderExchangeIdentifier","type":"address"},{"name":"_orderExchangeAmount1","type":"int256"},{"name":"_orderExchangeIdentifier1","type":"address"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_member","type":"address"},{"indexed":false,"name":"_orderExchangeAmount","type":"int256"},{"indexed":true,"name":"_orderExchangeIdentifier","type":"address"},{"indexed":false,"name":"_orderExchangeAmount1","type":"int256"},{"indexed":true,"name":"_orderExchangeIdentifier1","type":"address"}],"name":"CreateOrder","type":"event"}]);
		marketContract.options.address = marketAddress;
		console.log(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1);
		marketContract.methods.createOrder(_member, _orderExchangeAmount,_orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1).send({
			from: masterAccount,
			gas: 8888888,
			gasPrice: 10000000000000,
		}, function(error, result){
			console.log(result);
		});
	},

	//MULTIDORDER // TODO: SOON
	createOrderM: function(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1){
		//var marketContract = new web3.eth.Contract([{"constant":false,"inputs":[{"components":[{"name":"identifier","type":"string"},{"name":"amount","type":"uint256"}],"name":"assetSet","type":"tuple[]"},{"components":[{"name":"identifier","type":"string"},{"name":"amount","type":"uint256"}],"name":"assetSet1","type":"tuple[]"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"components":[{"name":"identifier","type":"string"},{"name":"amount","type":"uint256"}],"indexed":true,"name":"assetSet","type":"tuple[]"},{"components":[{"name":"identifier","type":"string"},{"name":"amount","type":"uint256"}],"indexed":true,"name":"assetSet1","type":"tuple[]"}],"name":"CreateOrder","type":"event"}]);
		//var marketContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_member","type":"address"},{"name":"_orderExchangeAmount","type":"int256[]"},{"name":"_orderExchangeIdentifier","type":"address[]"},{"name":"_orderExchangeAmount1","type":"int256[]"},{"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_member","type":"address"},{"indexed":false,"name":"_orderExchangeAmount","type":"int256[]"},{"indexed":true,"name":"_orderExchangeIdentifier","type":"address[]"},{"indexed":false,"name":"_orderExchangeAmount1","type":"int256[]"},{"indexed":false,"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"CreateOrder","type":"event"}]);
   		var marketContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_member","type":"address"},{"name":"_orderExchangeAmount","type":"int256[]"},{"name":"_orderExchangeIdentifier","type":"address[]"},{"name":"_orderExchangeAmount1","type":"int256[]"},{"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_member","type":"address"},{"indexed":false,"name":"_orderExchangeAmount","type":"int256[]"},{"indexed":true,"name":"_orderExchangeIdentifier","type":"address[]"},{"indexed":false,"name":"_orderExchangeAmount1","type":"int256[]"},{"indexed":false,"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"CreateOrder","type":"event"}]);
		marketContract.options.address = '0x12fd8bb95ccdcab34c257a4e80727154e21081ef';
		console.log(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1);

		//address _member, 
		//int[] _orderExchangeAmount, 
		//address[] _orderExchangeIdentifier, 
		//int[] _orderExchangeAmount1, 
		//address[] _orderExchangeIdentifier1

		//gottaa multid
		marketContract.methods.createOrder(_member, [_orderExchangeAmount],[_orderExchangeIdentifier], [_orderExchangeAmount1], [_orderExchangeIdentifier1]).send({
		//marketContract.methods.createOrder([{"identifier":"1","amount":"10"},{"identifier":"2","amount":"5"}],[{"identifier":"1","amount":"10"},{"identifier":"2","amount":"5"}]).send({
		//marketContract.methods.createOrder(_member, _orderExchangeAmount, _orderExchangeIdentifier, _orderExchangeAmount1, _orderExchangeIdentifier1).send({
			from: masterAccount,
			gas: 8888888,
			gasPrice: 10000000000000,
		}, function(error, result){
			console.log('hello')
			console.log(error);
			console.log(result);
		});
	},

	createCredit: function(model){
		web3.eth.sendTransaction({
			from: masterAccount,
			to: model.address, //wallet, //model.address
			value: web3.extend.utils.toWei(model.amount, 'ether')
		}, function(error, result){
			console.log(error, result)
		});
	},

	//SOLVE GAS?
	sendCredit: function(model, amount){
		web3.eth.sendTransaction({
			from: model.from,
			to: model.to, //model.address
			value: web3.extend.utils.toWei(model.amount, 'ether')
		}, function(error, result){
			console.log(error, result)
		});
	},

	createWallet: function(model){
		var wallet = web3.eth.accounts.create();
		//BOOTSTRAP INIT COINS
		//web3.eth.sendTransaction({
		//	from: masterAccount,
		//	to: wallet,
		//	value: web3.extend.utils.toWei(1, 'ether')
		//}, function(error, result){
		//	console.log(error, result)
		//});
		return wallet;
	},

	createMultiDimensionalViewToken:function(model){
		console.log('CREATE')
		console.log(model);
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address = viewTokenAddress;
		//use address vs mongoid
		//use address vs 'video' re:indetifier
		//console.log(model);
		viewContract.methods.createView(model._address, model._id, model._time).send({
			from: masterAccount,
			gas: 8888888,
			gasPrice: 10000000000000,
		}, function(error, result){
			console.log('createMultiDimensionalViewToken');
			console.log(error, result);
		});
	},

	getBalance:function(address){
		var deferred = Q.defer();
		web3.eth.getBalance(address.toString(), 'latest', function(error, result){
			console.log(result);
			deferred.resolve(result);
		});
		return deferred.promise;
	},

	getMultiDimensionalTokenBalance:function(model){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address = viewTokenAddress;
		//I have logged the contract.. --> we could use a watch via socket on frontend
		console.log('getMultiDimensionalTokenBalance');
		console.log(model);
		viewContract.methods.balanceOf(model.address.toString(), model.identifier).call({from: masterAccount}, function(error, result){
			deferred.resolve({balance:result})
		});
		return deferred.promise;
	},

	getMultiDimensionalTokenBalanceLegacy:function(model){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address = viewTokenAddress;
		//I have logged the contract.. --> we could use a watch via socket on frontend
		console.log('getMultiDimensionalTokenBalance')
		viewContract.methods.balanceOf(model.address.toString(), model.identifier).call({from: masterAccount}, function(error, result){
			viewContract.getPastEvents('CreateViewToken', {
				//filter: {_to: model.address.toString()}, //not working --~
			    fromBlock: 0,
			    toBlock: 'latest'
			})
			.then(function(events){
			    console.log(events);
			    deferred.resolve({balance:result, events:events})
			});
		});
		return deferred.promise;
	},

	getMultiDimensionalTokenEvents:function(model){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address ='0x76eDD91a05cd7B0d9f1e526c677Ad153B37251c7';
		viewContract.getPastEvents('CreateViewToken', {
			//filter: {_to: model.address.toString()},
		    fromBlock: 0,
		    toBlock: 'latest'
		})
		.then(function(events){
		    //console.log(events);
		    deferred.resolve(events)
		});
		return deferred.promise;
	},

	getTokenBalance:function(address){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address = viewTokenAddress;
		viewContract.methods.balances(address.toString()).call({from: masterAccount}, function(error, result){
			deferred.resolve(result);
		});
		return deferred.promise;
	},

}