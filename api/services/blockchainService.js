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
personal.unlockAccount('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', '?><Mtrev77922', 1000000);


module.exports = {

	getBalance:function(address){

		//web3.eth.getBalance('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579', 'latest', function(error, result){
		//	console.log(result);
		//});

		//console.log(address.toString())
		var deferred = Q.defer();
		web3.eth.getBalance(address.toString(), 'latest', function(error, result){
			deferred.resolve(result)
		});
		return deferred.promise;

	},

	getTokenBalance:function(address){
		var deferred = Q.defer();
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		viewContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';
		viewContract.methods.balances(address.toString()).call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
			deferred.resolve(result);
		});
		return deferred.promise;
	},

	createWallet: function(model){
		var wallet = web3.eth.accounts.create();
		return wallet;
	},

	createView: function(model){

		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		viewContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});

	},


	createClick: function(model){

		var clickContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clicks","outputs":[{"name":"video","type":"string"},{"name":"click","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"}],"name":"createClick","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
		clickContract.options.address ='0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';
		clickContract.methods.createClick(model.user, model.video, model.watchTime).send({
			from: '0x5e72914535f202659083db3a02c984188fa26e9f',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});

	},

	createEmbed: function(model){

		var embedContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		embedContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';
		embedContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});

	},


	createCredit: function(model){

		var creditContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		creditContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';
		creditContract.methods.createView(model.user, model.credit).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});

	},

	sendCredit: function(model, amount){

		//model.amount
		//model.amount
		web3.eth.sendTransaction({
			from:'0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			to: model.walletAddress, //model.address
			value: web3.extend.utils.toWei(amount, 'ether')
		}, function(error, result){
			console.log(error, result)
		});



		
	},
}