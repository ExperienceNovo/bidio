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

.controller( 'VideoCtrl', ['$location', '$mdDialog', '$sailsSocket', '$scope', '$uibModal', 'ClickModel', 'config', 'ezfb', 'lodash', 'titleService', 'video', 'VideoModel', 'ViewModel', function VideoCtrl( $location, $mdDialog, $sailsSocket, $scope, $uibModal, ClickModel, config, ezfb, lodash, titleService, video, VideoModel, ViewModel ) {

	$scope.currentUser = config.currentUser;
	$scope.video = video;
    $scope.video.poster = 'images/video-overlay.png'
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	titleService.setTitle(video.title + ' - bidio');
	$scope.viewModel = {};
	$scope.media = {
	    sources: [
	        {
	            src: $scope.video.amazonUrl,
	            type: 'video/webm'
	        }
	    ],
	    poster: $scope.video.poster
	};

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	if ($scope.currentUser && $scope.video.bids){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.highestBid.id;
	    ViewModel.create($scope.viewModel);
	}

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
            	$scope.video = envelope.data;
                break;
			//case 'addedTo':
            //	$scope.video = envelope.data;
            //    break;
        }
    });

	$scope.bid = function(){
		$uibModal.open({
			animation: true,
			templateUrl: "video/templates/bid.tpl.html",
			controller: "BidCtrl",
			resolve: {
				video: function(){
					return video;
				},
				campaigns: function(CampaignModel){
					return CampaignModel.getMine();
				},
				highestBid: function(){
					return $scope.highestBid;
				}
			}
		})
		.result
        .then(function(result){
        	$scope.highestBid = result;
        	$scope.video.campaign = result.campaign
        	console.log($scope.video.campaign)
        });
	};
    
	$scope.share = function(ev) {
		console.log(ev)
	    $mdDialog.show({
	      controller: "ShareDialogCtrl",
	      templateUrl: 'video/templates/shareDialog.tpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose: true,
			resolve: {
				user: function(UserModel){
					if($scope.currentUser){return UserModel.getMine()}
					else{return null}
				}
			}
	    });
	};

	$scope.clickThrough = function(){
		console.log(video)
		ClickModel.create($scope.viewModel).then(function(){
			$location.path(/campaign/+$scope.video.campaign.urlTitle)
		});
		$location.path(/campaign/+$scope.video.campaign.urlTitle);
	};

}])

.controller('BidCtrl', ['$scope', '$mdDialog', '$uibModalInstance', 'BidModel', 'campaigns', 'config', 'highestBid', 'video', function ($scope, $mdDialog, $uibModalInstance, BidModel, campaigns, config, highestBid, video ) {

	$scope.campaigns = campaigns;
	$scope.video = video;
	$scope.highestBid = highestBid;
	var startingValue = {};

	$scope.bid = {
		//should come from selected campaign..
		value: String(parseFloat(highestBid.value + 0.05).toFixed(2)),
		video: video.id,
		user: config.currentUser.id,
		isAccepted: true,
		isActive: true
	};

	$scope.createBid = function(bid){
		BidModel.create(bid).then(function(result){
			$uibModalInstance.close(result)
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	};

}])

//lol...
.controller('ShareDialogCtrl', ['$scope', '$location', '$mdDialog', 'ezfb', 'localStorageService', 'ShareModel', 'user', function ($scope, $location, $mdDialog, ezfb, localStorageService, ShareModel, user ) {
	localStorageService.set('shareUrl', $location.absUrl());
	$scope.user = user;
	$scope.shareComplete, $scope.shareSuccess, $scope.shareFailed = false;
	var shareUrl = localStorageService.get('shareUrl');
	$scope.shareUrl = shareUrl;
	$scope.tweeting = false;
	$scope.share = {};
	$scope.share.composition = '';
	const MEDIA_CHAR_LENGTH = 24;
	$scope.tweetCompPadding = shareUrl.length + MEDIA_CHAR_LENGTH; //' @cre8bidio '.length

	$scope.shareFacebook = function() {
		$mdDialog.cancel();
		ezfb.ui(
	     	{
	        	method: 'share',
				href: 'www.bidio.co',
				name: 'name',
				picture: 'https://pbs.twimg.com/profile_images/743123913496891392/6k6q5pg-_400x400.jpg',
	        	description: 'description',
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
			var composition = $scope.share.composition //+ ' ' + shareUrl + ' @cre8bidio';
			if (!$scope.user) {
				var webIntentURL = 'https://twitter.com/intent/tweet?text='
	      		window.open(webIntentURL + encodeURIComponent(composition)
					+ '&url=' + encodeURIComponent(shareUrl))
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
						+ '&url=' + encodeURIComponent(shareUrl))
						// + '&via=cre8bidio')
					//change dialog content -> success?
					$scope.shareComplete = true;
					$scope.shareSuccess = true;
				} 
				else {
					$scope.shareWorking = true;
					ShareModel.shareTwitter(encodeURIComponent(composition), encodeURIComponent(shareUrl))
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
