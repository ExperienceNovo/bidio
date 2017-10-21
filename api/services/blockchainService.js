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
var PersonalTESTNET = new Personal('http://localhost:8545');
PersonalTESTNET.unlockAccount('0x818c3e3a61a5c2071841df187318e5be2c238201', '7792', 1000000);


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

	getTokens: function(){

		//var filter = web3.eth.filter({
		//  fromBlock: 0,
		//  toBlock: 'latest',
		//  address: 0x2822e0ee13eaa47e2ed9ef020a2c5c4b65c6bab4,
		//  topics: ''//[web3.sha3('newtest(string,uint256,string,string,uint256)')]
		//});

		//filter.watch((error, result) => {
		//   console.log(result, error)
		//});
		//console.log(web3.eth.filter)


	},

	getTokenBalanceNew:function(address){
		var deferred = Q.defer();
		var viewContract = new web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"content","type":"string"},{"name":"viewer","type":"string"},{"name":"creator","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"content","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"content","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateViewToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
		viewContract.options.address ='0x2822e0ee13eaa47e2ed9ef020a2c5c4b65c6bab4';
		viewContract.methods.balances(address.toString()).call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
			deferred.resolve(result);
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
	
		//BOOTSTRAP INIT COINS
		web3.eth.sendTransaction({
			from:'0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			to: wallet, //model.address
			value: web3.extend.utils.toWei(1, 'ether')
		}, function(error, result){
			console.log(error, result)
		});

		return wallet;
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

	createViewNew: function(model){
		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"content","type":"string"},{"name":"viewer","type":"string"},{"name":"creator","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"content","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"content","type":"string"},{"indexed":false,"name":"watchTime","type":"uint256"}],"name":"CreateViewToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
		viewContract.options.address ='0x2822e0ee13eaa47e2ed9ef020a2c5c4b65c6bab4';
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(error, result)
		});
	},

	createView: function(model){

		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		viewContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';
		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(error, result)
		});

	},

	createClick: function(model){

		var clickContract = new web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"clicks","outputs":[{"name":"video","type":"string"},{"name":"click","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"}],"name":"createClick","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
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