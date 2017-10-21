var web3 = require('web3');
var Web3 = require('web3');
var web3 = new Web3();
var async = require('async');

if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
//else {web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));}
//web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));
else {web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8546"));}
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
var Personal = require('web3-eth-personal');
var personal = new Personal('http://localhost:8545');

personal.unlockAccount('0x818c3e3a61a5c2071841df187318e5be2c238201', '7792', 1000000);

web3.eth.getBalance('0x818c3e3a61a5c2071841df187318e5be2c238201', 'latest', function(error, result){
	console.log(result)
});

var wallet = web3.eth.accounts.create();
//console.log(wallet.address)
//BOOTSTRAP INIT COINS

var foo = new Array(1000000000);
var totalCount = 0;
var cycleCount = 0;


async.eachSeries(foo, function (model, nextIteration){ 
	var count = 0;
	for (var i = 0; i < 10; i++){
		var wallet = web3.eth.accounts.create();
		web3.eth.sendTransaction({
			from:'0x818c3e3a61a5c2071841df187318e5be2c238201',
			to: wallet.address,
			value: web3.extend.utils.toWei(1, 'ether')
		}, function(error, result){
			count++;
			totalCount++;
			console.log('SEEDED:', result, count, cycleCount, totalCount, totalCount/10000000000);
			if (count==10){cycleCount++;process.nextTick(nextIteration);}
		});
	}
});


//var sub = web3.eth.subscribe('logs', options);
//sub.on('data',functions(result){
//console.log(result);
//});


var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
	//console.log(result);
})
.on("data", function(transaction){
	//console.log(transaction, totalCount, totalCount/10000000000)
});



/*
var subscription = web3.eth.subscribe('logs', {
    address: '0x818c3e3a61a5c2071841df187318e5be2c238201',
    topics: [null]
}, function(error, result){
    if (!error)
        console.log(log);
})
.on("data", function(log){
})
.on("changed", function(log){
});
*/



//contractInstance.getPastEvents('allEvents', {fromBlock: 0, toBlock: 'latest'}, function(e,l){console.log(l)})
//web3.eth.subscribe('logs' [, options] [, callback]);

