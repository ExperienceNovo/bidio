var youtubedl = require('youtube-dl');
var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'AKIAJ6LR6NCGXZNH4QJQ', secretAccessKey: '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'});
var zlib = require('zlib');
var s3Stream = require('s3-upload-stream')(new AWS.S3());
var stream = require('stream');

var web3 = require('web3');
var Web3 = require('web3');
var web3 = new Web3();

var Personal = require('web3-eth-personal');
var personal = new Personal('http://172.31.19.250:30302');


function youtubeToS3(youtubeUrl, user){
	AWS.config.httpOptions.timeout = 0;
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
				urlTitle: info.title.replace(/ /g, '-').toLowerCase(), 
				description: info.description, 
				user: user,
				amazonUrl: details.Location,
				thumbnailUrl: info.thumbnails[0].url,
			};
			console.log(videoModel)

			Video.create(videoModel).then(function(model){
				console.log(model);
				//resolve promise
			});

		});

		video.pipe(upload);

	});
};



module.exports.intervalService = function(){

	if (typeof web3 !== 'undefined') {web3 = new Web3(web3.currentProvider);}
	else {web3 = new Web3(new Web3.providers.WebsocketProvider("ws://172.31.19.250:8546"));}
	web3.setProvider(new Web3.providers.WebsocketProvider('ws://172.31.19.250:8546'));
	personal.unlockAccount('0xc2bb26082403cc1fb0e75769559c85be14ae95a3', 'create', 1000000);

	var rhysUrl = ['https://www.youtube.com/watch?v=BtwwgqtHID8',
	'https://www.youtube.com/watch?v=FBkwcObtybw',
	'https://www.youtube.com/watch?v=8HyVxtQ9RVY',
	'https://www.youtube.com/watch?v=PaTaFY1sLv8',
	'https://www.youtube.com/watch?v=MmYZp3mGhlQ',
	'https://www.youtube.com/watch?v=hLh18sixtxo',
	'https://www.youtube.com/watch?v=zCXTijoxxR0',
	'https://www.youtube.com/watch?v=OLSle6HFOZU',
	'https://www.youtube.com/watch?v=ttFyQAliLDQ',
	'https://www.youtube.com/watch?v=qJPoxvDrhm8',
	'https://www.youtube.com/watch?v=XgEZwpeV6Fg',
	'https://www.youtube.com/watch?v=U-Sp3jQ4WJg',
	'https://www.youtube.com/watch?v=D83WXLulfC8',
	'https://www.youtube.com/watch?v=uoXkyql8_BQ',
	'https://www.youtube.com/watch?v=5FdEX5UXxx0',
	'https://www.youtube.com/watch?v=GrOqSxp0ano',
	'https://www.youtube.com/watch?v=0y7VhxoAwxA',
	'https://www.youtube.com/watch?v=IlWVmHAe2J0',
	'https://www.youtube.com/watch?v=UZIyK1wuKK0',
	'https://www.youtube.com/watch?v=o8QuF4bu4ig',
	'https://www.youtube.com/watch?v=LhCt8vytYNQ',
	'https://www.youtube.com/watch?v=x4M_0Y-Kf0w',
	'https://www.youtube.com/watch?v=FUrf1WuqkaQ',
	'https://www.youtube.com/watch?v=MxDtxbYtma4',
	'https://www.youtube.com/watch?v=IaTmkK8iGrw',
	'https://www.youtube.com/watch?v=DQKZeDcFAnU',
	'https://www.youtube.com/watch?v=pGAmhLMeEi0',
	'https://www.youtube.com/watch?v=h-fK4UNZnx4',
	'https://www.youtube.com/watch?v=89gzX266PWw',
	'https://www.youtube.com/watch?v=Ryx_IDlbP_c',
	'https://www.youtube.com/watch?v=cxKOkAStwWo',
	'https://www.youtube.com/watch?v=HJb_rI1ugcU'];

	for (x in rhysUrl){
		//if (x<2){youtubeToS3(rhysUrl[x], '5aa712313909b60400b7a536');}
		//youtubeToS3(rhysUrl[x], '5aa712313909b60400b7a536');
	}

	//TODO: UPDATE WALLETS
	/*
	User.find().then(function(models){
		for (x in models){
			var wallet = blockchainService.createWallet(models[x]);
            models[x].walletAddress = wallet.address;
            models[x].walletPrivateKey = wallet.privateKey;
            //console.log(models[x])
            User.update({id: models[x].id}, models[x]).then(function(model){
            	console.log(model)
            });
		}
	});
	*/

	//TODO: CREATE CONTENT CONTRACT >>
	//URL, address --> id
	/*Video.find().then(function(models){
		for (x in models){
			//POST TO CHAIN.. THEN GET ID.
            models[x].address = contract.address
            //console.log(models[x])
            Video.update({id: models[x].id}, models[x]).then(function(model){
            	console.log(model)
            });
		}
	});*/








	//LEGACY BROADCAST -- SERVER
	var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
	})
	.on("data", function(transaction){	
		sails.sockets.broadcast('pendingTransactions', 'pendingTransactions', { transaction: transaction });
	});

	//viewcontract w event
	var viewContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"identifier","type":"string"},{"indexed":false,"name":"time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
	viewContract.options.address ='0x76eDD91a05cd7B0d9f1e526c677Ad153B37251c7';

	viewContract.events.CreateViewToken({
	    fromBlock: 0
	}, 
	function(error, event){ console.log(error, 'ERROR');console.log(event, 'HELLO'); })
	.on('data', function(event){
	    console.log(event, 'HELLO123'); // same results as the optional callback above
	});

	viewContract.getPastEvents('CreateViewToken', {fromBlock: 0, toBlock: 'latest'}, function(e,l){console.log(l)})

	//SUBSCRIBE... EVENT IN THE VIEW CONTRACT :)

	//web3.eth.getBalance('0xCE6e3661ec5745158A7fc040FBD3077C5E1c4609', 'latest', function(error, result){
		//console.log(result)
	//});







	//LOCATION CONTRACT
	/*
	var locationContract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_lat","type":"uint256"},{"name":"_lng","type":"uint256"}],"name":"createLocation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"locations","outputs":[{"name":"lat","type":"uint256"},{"name":"lng","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"getLocation","outputs":[{"name":"","type":"uint256[2]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"getBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_lat","type":"uint256"},{"indexed":true,"name":"_lng","type":"uint256"}],"name":"CreateLocationToken","type":"event"}]);
	locationContract.options.address ='0x01570f4af02AFBaB605fBf746d48189c8c679572';

	function callContract(){
		locationContract.methods.createLocation('0x818c3e3a61a5c2071841df187318e5be2c238201', 35, -79).send({
			from: '0x818c3e3a61a5c2071841df187318e5be2c238201',
			gas: 888888
		}, function(error, result){
			console.log(error, result)
		});
		locationContract.methods.getLocation('0x818c3e3a61a5c2071841df187318e5be2c238201').call({from: '0x818c3e3a61a5c2071841df187318e5be2c238201'}, function(error, result){
			console.log(error, result)
		});
		locationContract.methods.getBalance('0x818c3e3a61a5c2071841df187318e5be2c238201').call({from: '0x818c3e3a61a5c2071841df187318e5be2c238201'}, function(error, result){
			console.log(error, result)
		});
	};
	setInterval(callContract, 1000);

	locationContract.methods.getBalance('0x818c3e3a61a5c2071841df187318e5be2c238201').call({from: '0x818c3e3a61a5c2071841df187318e5be2c238201'}, function(error, result){
		console.log(error, result)
	});
	locationContract.events.CreateLocationToken({
	    fromBlock: 0
	}) 
	.on('data', function(event){
	    console.log(event, 'HELLO123'); // same results as the optional callback above
	});
	locationContract.getPastEvents('CreateLocationToken', {fromBlock: 0, toBlock: 'latest'}, function(e,l){console.log(l)})
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







};