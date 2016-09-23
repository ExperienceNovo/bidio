angular.module( 'bidio.video', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'video', {
		url: '/video/:id',
		views: {
			"main": {
				controller: 'VideoCtrl',
				templateUrl: 'video/index.tpl.html'
			}

		},
		resolve: {
			video: function(VideoModel, $stateParams){
				return VideoModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, lodash, config, titleService, $sailsSocket, video, $location, $mdDialog, $uibModal, ViewModel, VideoModel, ClickModel, ezfb ) {

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

	console.log($scope.video);

	//console.log($scope.video.bids)
	//console.log($scope.user)

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.video.id;
	    ViewModel.create($scope.viewModel);
	}

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	$scope.bid = function(){
		$uibModal.open({
			animation: true,
			templateUrl: "video/templates/bid.tpl.html",
			controller: "BidCtrl",
			resolve: {
				video: function(){
					return video
				},
				campaigns: function(CampaignModel){
					return CampaignModel.getMine();
				},
				highestBid: function(){
					return $scope.highestBid;
				}
			}
		});
	};
    
	$scope.share = function(ev) {

	    $mdDialog.show({
	      controller: "ShareDialogCtrl",
	      templateUrl: 'video/templates/shareDialog.tpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose: true,
			resolve: {
				user: function(UserModel){
						return UserModel.getMine();
				}
			}
	    });

	};

	$scope.clickThrough = function(){
		$scope.video.clicked = true;
		//ClickModel.create().then(function(){
			//$location.path(/campaign/+video.campaign.urlTitle)
		//});
		VideoModel.update($scope.video).then(function(){
			$location.path(/campaign/+video.campaign.urlTitle);
		});
		$location.path(/campaign/+video.campaign.urlTitle);


	};

	$sailsSocket.subscribe('bid', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.video.bids.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.video.bids, {id: envelope.id});
                break;
        }
    });

    $sailsSocket.subscribe('video', function (envelope) {
        switch(envelope.verb) {
            case 'updated':
            	$scope.video = envelope.data;
                break;
        }
    });

})

.controller('BidCtrl', function ($scope, highestBid, video, config, campaigns, BidModel, $uibModalInstance, $mdDialog ) {

	$scope.campaigns = campaigns;
	$scope.video = video;
	$scope.highestBid = highestBid;
	var startingValue = {};

	$scope.bid = {
		value: String(parseFloat(highestBid.value) + 0.05),
		video: video.id,
		user: config.currentUser.id,
		isAccepted: true,
		isActive: true
	}

	$scope.createBid = function(bid){
		BidModel.create(bid).then(function(result){
			console.log(result);
			$uibModalInstance.dismiss(result.data)
		});
	}

	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	};

})

.controller('ShareDialogCtrl', function ($scope, $location, $mdDialog, ezfb, user, UserModel, ShareModel, localStorageService ) {

	localStorageService.set('shareUrl', $location.absUrl());
	$scope.user = user;

	$scope.shareComplete, $scope.shareSuccess, $scope.shareFailed = false;

	var shareUrl = localStorageService.get('shareUrl');
	$scope.tweeting = false;

	$scope.share = {};
	$scope.share.composition = '';
	const MEDIA_CHAR_LENGTH = 24;
	$scope.tweetCompPadding = shareUrl.length + MEDIA_CHAR_LENGTH; //' @cre8bidio '.length

	$scope.shareFacebook = function() {
		console.log('share facebook')
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
			console.log('share twitter')
			console.log('user: ', $scope.user)

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
			} else {

				for (var i in $scope.user.passports) {
					if ($scope.user.passports[i].provider === 'twitter')
						var tokens = $scope.user.passports[i].tokens;
				}

				if (!tokens) {
					var webIntentURL = 'https://twitter.com/intent/tweet?text='
		      		window.open(webIntentURL + encodeURIComponent(composition)
						+ '&url=' + encodeURIComponent(shareUrl))
						// + '&via=cre8bidio')

					//change dialog content -> success?
					$scope.shareComplete = true;
					$scope.shareSuccess = true;

				} else {

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
						})

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
});
