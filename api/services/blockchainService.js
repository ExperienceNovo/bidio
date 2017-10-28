var web3 = require('web3');
var Web3 = require('web3');
var web3 = new Web3();
var Q = require('q');

var Personal = require('web3-eth-personal');
var personal = new Personal('http://cre8wium3.eastus.cloudapp.azure.com:8545');

if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
else {web3 = new Web3(new Web3.providers.HttpProvider("http://cre8wium3.eastus.cloudapp.azure.com:8545"));}
web3.setProvider(new Web3.providers.HttpProvider('http://cre8wium3.eastus.cloudapp.azure.com:8545'));

//WARNING: sketch security --> need governace code.
//SOLVE THE GAS PROBLEM!
personal.unlockAccount('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', '?><Mtrev77922', 1000000);

//TESTNET
//var PersonalTESTNET = new Personal('http://localhost:8545');
//PersonalTESTNET.unlockAccount('0x818c3e3a61a5c2071841df187318e5be2c238201', '7792', 1000000);


module.exports = {

	createCredit: function(model){
		web3.eth.sendTransaction({
			from:'0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			to: wallet, //model.address
			value: web3.extend.utils.toWei(model.amount, 'ether')
		}, function(error, result){
			console.log(error, result)
		});
	},

	createWallet: function(model){
		var wallet = web3.eth.accounts.create();
		//BOOTSTRAP INIT COINS
		web3.eth.sendTransaction({
			from:'0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			to: wallet,
			value: web3.extend.utils.toWei(1, 'ether')
		}, function(error, result){
			console.log(error, result)
		});
		return wallet;
	},

	createMultiDimensionalViewToken:function(model){
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		
		//AZURE
		viewContract.options.address ='0x6c728ed572633d08cbea0e7ed7aadbf2f044788f';

		//LOCAL
		//viewContract.options.address ='0x6c728ed572633d08cbea0e7ed7aadbf2f044788f';

		//use address vs mongoid
		//use address vs 'video' re:indetifier
		console.log(model)
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});
	},

	createViewTESTNET: function(model){
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"video","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateView","type":"event"}]);
		viewContract.options.address ='0xb835f4b6cb820bf7ff23915db98f734dca603616';
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0x818c3e3a61a5c2071841df187318e5be2c238201',
			gas: 88888
		}, function(error, result){
			console.log('TESTNET')
			console.log(error, result)
		});
	},

	createView: function(model){
		console.log(model)
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"content","type":"string"},{"name":"viewer","type":"string"},{"name":"creator","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"content","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"content","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateViewToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
		viewContract.options.address ='0x2822e0ee13eaa47e2ed9ef020a2c5c4b65c6bab4';
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(error, result)
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
		var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
		viewContract.options.address ='0x6c728ed572633d08cbea0e7ed7aadbf2f044788f';
		//I have logged the contract.. --> we could use a watch via socket on frontend
		console.log('getMultiDimensionalTokenBalance')
		viewContract.methods.balanceOf(model.address.toString(), model.identifier).call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
			//deferred.resolve(result);
			//BLEK
			viewContract.getPastEvents('CreateViewToken', {
				filter: {_to: model.address.toString()}, //not working --~
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
		viewContract.getPastEvents('CreateViewToken', {
			filter: {_to: model.address.toString()},
		    fromBlock: 0,
		    toBlock: 'latest'
		})
		.then(function(events){
		    console.log(events);
		    deferred.resolve(events)
		});
		return deferred.promise;
	},

	getTokenBalanceTESTNET:function(address){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"video","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateView","type":"event"}]);
		viewContract.options.address ='0xb835f4b6cb820bf7ff23915db98f734dca603616';
		viewContract.methods.balances(address.toString()).call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
			deferred.resolve(result);
		});
		return deferred.promise;
	},

	getTokenBalance:function(address){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"content","type":"string"},{"name":"viewer","type":"string"},{"name":"creator","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"content","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"content","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateViewToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
		viewContract.options.address ='0x2822e0ee13eaa47e2ed9ef020a2c5c4b65c6bab4';
		viewContract.methods.balances(address.toString()).call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
			deferred.resolve(result);
		});
		return deferred.promise;
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

}