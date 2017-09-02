var web3 = require('web3');
var Web3 = require('web3');
var web3 = new Web3();

var Personal = require('web3-eth-personal');
var personal = new Personal('http://cre8wium3.eastus.cloudapp.azure.com:8545');

if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
else {web3 = new Web3(new Web3.providers.HttpProvider("http://cre8wium3.eastus.cloudapp.azure.com:8545"));}
web3.setProvider(new Web3.providers.HttpProvider('http://cre8wium3.eastus.cloudapp.azure.com:8545'));

personal.unlockAccount('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', '?><Mtrev77922', 1000000);


module.exports = {
	createView: function(model){

		var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
		viewContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';

		viewContract.methods.createView(model.user, model.video, model.watchTime).send({
			from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
			gas: 88888
		}, function(error, result){
			console.log(result)
		});

	}
}