var youtubedl = require('youtube-dl');
var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'AKIAJ6LR6NCGXZNH4QJQ', secretAccessKey: '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'});
var zlib = require('zlib');
var s3Stream = require('s3-upload-stream')(new AWS.S3());
var stream = require('stream');


function youtubeToS3(youtubeUrl, user){

	var video = youtubedl(youtubeUrl,
		['--format=18'],
		{maxBuffer: Infinity}
	);

	video.on('info', function(info) {
		console.log(info.title);
		console.log(info.size);

		var guid = utilsService.guid()
		var params = {Bucket: 'bidio8', Key: guid + '.mp4'};
		var upload = s3Stream.upload(params);

		upload.on('error', function (error) {
			console.log(error);
		});

		upload.on('part', function (details) {
			console.log(details);
		});

		upload.on('uploaded', function (details) {

			var videoModel = {
				title: info.title, 
				urlTitle: 'youtube-s3', 
				description: info.description, 
				user: user.id,
				amazonUrl: details.Location,
				thumbnailUrl: info.thumbnails[0].url,
			};

			Video.create(videoModel).then(function(model){
				console.log(model);
				//resolve promise
			});

		});

		video.pipe(upload);

	});

};



module.exports.intervalService = function(){


	var web3 = require('web3');
	var Web3 = require('web3');
	var web3 = new Web3();

	var Personal = require('web3-eth-personal');
	var personal = new Personal('http://cre8wium3.eastus.cloudapp.azure.com:8545');

	if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
	else {web3 = new Web3(new Web3.providers.HttpProvider("http://cre8wium3.eastus.cloudapp.azure.com:8545"));}
	web3.setProvider(new Web3.providers.HttpProvider('http://cre8wium3.eastus.cloudapp.azure.com:8545'));

	personal.unlockAccount('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', '?><Mtrev77922', 1000000);

	//var test = blockchainService.createWallet();

	/*User.find().then(function(models){
		for (x in models){
			var wallet = blockchainService.createWallet(models[x]);
            models[x].walletAddress = wallet.address;
            models[x].walletPrivateKey = wallet.privateKey;
            //console.log(models[x])
            User.update({id: models[x].id}, models[x]).then(function(model){
            	console.log(model)
            });
		}
	});*/

	//web3.eth.getAccounts()
	//.then(console.log);	

	//web3.eth.getBalance('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', 'latest', function(error, result){
		//console.log(result)
	//});

	//web3.eth.sendTransaction({
	//	from:'0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
	//	to: '0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579',
	//	value: web3.extend.utils.toWei('888', 'ether')
	//}, function(error, result){
		//console.log(error, result)
	//});
	
	//create contract
	//var contract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_newString","type":"string"}],"name":"changeMyString","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"myString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"openString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newNumber","type":"uint256"}],"name":"changeOpenNumber","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"openNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newString","type":"string"}],"name":"changeOpenString","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
	//contract.options.address ='0xd8c3db03842c9c2808e5964392646f3e823da992'
	//contract.methods.changeOpenNumber(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'}, function(error, result){
    //	console.log(result)
    //});

	/*var contract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"getBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
	contract.options.address ='0x31f9ebed79605a5d0e91248753a5ff52f82ec9ad';
	contract.methods.getBalance('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579').call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'}, function(error, result){
    	console.log(result);
    	console.log(error)
	});*/


	/*
	pragma solidity ^0.4.0;
	contract Token {
	    struct Location {
	        uint256 lat;
	        uint256 lng;
	    }
	    mapping (address => uint) public balances;
	    mapping(address => Location) public locations;
	    function Token() {
	        balances[msg.sender] = 1000000;
	    }
	    function transfer(address _to, uint _amount) {
	        if (balances[msg.sender] < _amount) {
	            throw;
	        }
	        balances[msg.sender] -= _amount;
	        balances[_to] += _amount;
	    }
	    function addLocation(address _to, uint256 lat, uint256 lng) {
	        locations[_to].lat = lat;
	        locations[_to].lng = lng;
	        balances[_to]++;
	    }
	    function getLocation(address _to) returns (uint256) {
	        var lat = locations[_to].lat;
	        var lng = locations[_to].lng;
	        return lat;
	    }
	    function getBalance(address _to) returns (uint balance) {
	        return balances[_to];
	    }
	}
	*/

	//var locationContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"lat","type":"uint256"},{"name":"lng","type":"uint256"}],"name":"addLocation","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"locations","outputs":[{"name":"lat","type":"uint256"},{"name":"lng","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"getLocation","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"getBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
	//locationContract.options.address ='0x89d1d841d1da69855264b87fadac7462a79fee6e';

	//locationContract.methods.addLocation('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579', '13', '10').send({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
    	//console.log(result);
    	//console.log(error)
	//});

	//locationContract.methods.getLocation('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579').call({from: '0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579'}, function(error, result){
	//	console.log(result)
	//});

	//locationContract.methods.getBalance('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579').call({from: '0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579'}, function(error, result){
    //	console.log(result);
	//});

	/*
	pragma solidity ^0.4.0;
	contract ViewToken {
	    struct View {
	        string video;
	        uint watchTime;
	    }
	    mapping (address => uint) public balances;
	    mapping (address => View) public views;
	    function ViewToken() {
	        //balances[msg.sender] = 1000000;
	    }
	    function transfer(address _to, uint _amount) {
	        if (balances[msg.sender] < _amount) {
	            throw;
	        }
	        balances[msg.sender] -= _amount;
	        balances[_to] += _amount;
	    }
	    function createView(address _to, string video, uint watchTime) {
	        views[_to].video = video;
	        views[_to].watchTime = watchTime;
	        balances[_to] += watchTime;
	    }
	}
	*/

	var viewContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"views","outputs":[{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"video","type":"string"},{"name":"watchTime","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]);
	viewContract.options.address ='0x3a66bba9c404e66d2863e85041810add03031860';

	viewContract.methods.views('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579').call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
		//console.log(result)
	});

	viewContract.methods.balances('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579').call({from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609'}, function(error, result){
		//console.log(result)
	});
	
	//viewContract.methods.createView('0x9fB168CEbAe474Ccb36a8B5D53Aa56c225B9c579', 'videoId', 600000).send({
	//	from: '0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609',
	//	gas: 88888
	//}, function(error, result){
	//	console.log(result)
	//});

};