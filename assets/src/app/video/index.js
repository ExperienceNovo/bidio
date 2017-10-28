angular.module( 'bidio.video', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'video', {
		url: '/video/:id',
		views: {
			"main": {
				controller: 'VideoCtrl',
				templateUrl: 'video/index.tpl.html'
			}
		},
		resolve: {
			bids: ['$stateParams', 'BidModel', function($stateParams, BidModel){
				//FOR SOCKETS
				return BidModel.getByVideo($stateParams.id);
			}],
			video: ['$stateParams', 'VideoModel', function($stateParams, VideoModel){
				return VideoModel.getOne($stateParams.id);
			}],
		}
	});
}])

.controller( 'VideoCtrl', ['$location', '$mdDialog', '$rootScope', '$sailsSocket', '$scope', '$uibModal', '$window', 'ClickModel', 'config', 'ezfb', 'lodash', 'seoService', 'titleService', 'video', 'VideoModel', 'ViewModel', function VideoCtrl( $location, $mdDialog, $rootScope, $sailsSocket, $scope, $uibModal, $window, ClickModel, config, ezfb, lodash, seoService, titleService, video, VideoModel, ViewModel ) {

	$scope.currentUser = config.currentUser;
	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	titleService.setTitle(video.title + ' - bidio');
	seoService.setKeywords('bidio, video, custom tags')
	seoService.setDescription(video.description)
	$scope.viewModel = {};
	$scope.media = {
	    sources: [
	        {
	            src: $scope.video.amazonUrl,
	            type: 'video/'+$scope.video.amazonUrl.split('.').slice(-1)[0].toLowerCase()
	        }
	    ],
	    poster: $scope.video.thumbnailUrl || '/images/video-overlay.png'
	};
	if($scope.media.sources[0].type == 'video/mov'){$scope.media.sources[0].type = 'video/mp4'}

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	if ($scope.currentUser && $scope.video.bids){
		$scope.viewModel.user = $scope.currentUser.id;
	}
	$scope.viewModel.video = $scope.video.id;
	$scope.viewModel.bid = $scope.highestBid.id;
    //ViewModel.create($scope.viewModel).then(function(model){
    //	console.log(model);
    	//ViewModel.update(
    		//on room close for the viewmodel watch -- update the view with the timer - on backend (y)
    //});


    //security - make server call -- ws connection -- this isnt secure. but ok for now
    //store startTime and endTime? - nah
    $scope.watchTimeInterval = {};
    $scope.viewModel.watchTime = 0;
    $scope.timerFunction = function(time){
    	$scope.viewModel.watchTime = $scope.viewModel.watchTime + time;
    }

    $scope.videoId = {};
    $scope.$on('vjsVideoReady', function (e, data) {
    	$scope.videoId = data.player;
    	//mb autoplay -- hm 
	    $scope.videoId.on('play', function (e) {
	    	console.log('play')
			$scope.watchTimeInterval = setInterval(function(){$scope.timerFunction(100)}, 100);
	    });
	   	$scope.videoId.on('load', function (e) {console.log('load??')})

	    $scope.videoId.on('pause', function (e) {
	        console.log('pause');
	    	clearInterval($scope.watchTimeInterval);
	    	//on pause save time - mb, mbnot
	    	console.log($scope.viewModel.watchTime)
	    	//ViewModel.create($scope.viewModel);
	    	//$scope.viewModel.watchTime = 0;
	    });
	});


	$rootScope.$on('$stateChangeStart',function(){
		ViewModel.create($scope.viewModel);
	});

	$scope.onExit = function() {
    	return ViewModel.create($scope.viewModel);
    };

    $window.onbeforeunload = $scope.onExit;


    //FONTEND WEB3!
	/*var viewContract = new $rootScope.cre8web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
	viewContract.options.address ='0x13159ad936b157e1e062bd837ed2c0068f4d299a';
		
    viewContract.getPastEvents('CreateViewToken', {
		filter: {_to: $scope.member.address.toString()},
	    fromBlock: 0,
	    toBlock: 'latest'
	})
	.then(function(events){
	    console.log(events);
	});*/



	//apparently not loading ---~~~
	$sailsSocket.subscribe('bid', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.video.bids.unshift(envelope.data);
				$scope.video.campaign = envelope.data.campaign
                break;
            case 'destroyed':
                lodash.remove($scope.video.bids, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('video', function (envelope) {
    	console.log(envelope)
        switch(envelope.verb) {
            case 'updated':
            	if($scope.video.id == envelope.data.id){
            		$scope.video = envelope.data;
            	}
                break;
			//case 'addedTo':
            //	$scope.video = envelope.data;
            //    break;
        }
    });

	$scope.bid = function(ev){
	    $mdDialog.show({
			controller: 'BidCtrl',
			templateUrl: 'video/templates/bid.tpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			resolve: {
				video: [function(){
					return video;
				}],
				campaigns: ['CampaignModel', function(CampaignModel){
					return CampaignModel.getMine();
				}],
				highestBid: [function(){
					return $scope.highestBid;
				}]
			}
		})
        .then(function(result){
        	console.log(result)
        	$scope.highestBid = result;
        	$scope.video.campaign = result.campaign
        	console.log($scope.video.campaign)
        });
	};
    
	$scope.share = function(ev) {
	    $mdDialog.show({
	      controller: 'ShareDialogCtrl',
	      templateUrl: 'video/templates/shareDialog.tpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose: true,
			resolve: {
				user: ['UserModel', function(UserModel){
					if($scope.currentUser){return UserModel.getMine()}
					else{return null}
				}],
				video: [function(){
					return video;
				}],
			}
	    });
	};

	$scope.clickThrough = function(){
		ClickModel.create($scope.viewModel)
		if($scope.video.campaign.doesRedirect){window.open($scope.video.campaign.redirectUrl, '_blank');}
		else{window.open(/campaign/+$scope.video.campaign.urlTitle, '_blank');}
	};

}])

.controller('BidCtrl', ['$scope', '$mdDialog', 'BidModel', 'campaigns', 'config', 'highestBid', 'video', function ($scope, $mdDialog, BidModel, campaigns, config, highestBid, video ) {

	$scope.campaigns = campaigns;
	$scope.video = video;
	$scope.highestBid = highestBid;
	var startingValue = {};
	$scope.bid = {
		//should come from selected campaign..
		value: String(((parseFloat(highestBid.value) + 0.05)).toFixed(2)),
		video: video.id,
		user: config.currentUser.id,
		isAccepted: true,
		isActive: true
	};

	$scope.createBid = function(bid){
		BidModel.create(bid).then(function(result){
			//$uibModalInstance.close(result)
			$mdDialog.hide(result);
		});
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])

.controller('ShareDialogCtrl', ['$scope', '$location', '$mdDialog', 'ezfb', 'localStorageService', 'ShareModel', 'user', 'video', function ($scope, $location, $mdDialog, ezfb, localStorageService, ShareModel, user, video ) {

	$scope.video = video;
	$scope.user = user;
	$scope.shareComplete, $scope.shareSuccess, $scope.shareFailed = false;
	$scope.shareUrl = 'https://www.bidio.co/video/'+video.id;
	$scope.tweeting = false;
	$scope.share = {};
	$scope.share.composition = '';
	const MEDIA_CHAR_LENGTH = 24;
	$scope.tweetCompPadding = $scope.shareUrl.length + MEDIA_CHAR_LENGTH; //' @cre8bidio '.length

	$scope.shareFacebook = function() {
		$mdDialog.cancel();
		ezfb.ui(
	     	{
	        	method: 'share',
				href: $scope.shareUrl,
				name: $scope.video.title,
				picture: 'http://www.bidio.co/images/video-overlay.png',
	        	description: $scope.video.description,
				hashtag: '#bidio',
	    	},
	    	function (res) {
				console.log(res);
	    	}
	    );
	};

	$scope.shareTwitter = function() {
		if ($scope.tweeting) {
			// COMPOSISTION MUST LEAVE ROOM FOR LINK TO WEBSITE: localstorage url length etc
			// AND MUST LEAVE ROOM FOR @cre8bidio (10 chars)
			var composition = $scope.share.composition //+ ' ' + $scope.shareUrl + ' @cre8bidio';
			if (!$scope.user) {
				var webIntentURL = 'https://twitter.com/intent/tweet?text='
	      		window.open(webIntentURL + encodeURIComponent(composition)
					+ '&url=' + encodeURIComponent($scope.shareUrl))
					// + '&via=cre8bidio')
				//change dialog content -> success?
				$scope.shareComplete = true;
				$scope.shareSuccess = true;
			} 
			else {
				for (var i in $scope.user.passports) {
					if ($scope.user.passports[i].provider === 'twitter'){
						var tokens = $scope.user.passports[i].tokens;
					}
				}
				if (!tokens) {
					var webIntentURL = 'https://twitter.com/intent/tweet?text='
		      		window.open(webIntentURL + encodeURIComponent(composition)
						+ '&url=' + encodeURIComponent($scope.shareUrl))
						// + '&via=cre8bidio')
					//change dialog content -> success?
					$scope.shareComplete = true;
					$scope.shareSuccess = true;
				} 
				else {
					$scope.shareWorking = true;
					ShareModel.shareTwitter(encodeURIComponent(composition), encodeURIComponent($scope.shareUrl))
					.then(function(tweetData) {
						console.log('tweetData: ', tweetData)
						$scope.tweetUsername = tweetData.username;
						$scope.tweetId = tweetData.tweetId;
						$scope.shareWorking = false;
						$scope.shareComplete = true;
						$scope.shareSuccess = true;
						$scope.sharedInHouse = true;
					}, function(err) {
						console.log(err)
						$scope.shareComplete = true;
						$scope.shareFailed = true;
						$scope.shareSuccess = false;
					});
				}
			}
		}
		else {
			$scope.tweeting = !$scope.tweeting;
		}
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

	$scope.viewTweet = function() {
		window.open('https://twitter.com/' + $scope.tweetUsername + '/status/' + $scope.tweetId)
	}
}]);
