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
		//onExit: function($state, video, VideoModel){
			//if(video.campaign && video.campaign.doesRedirect){
			//	return window.open(
			//		video.campaign.redirectUrl,
			//		"_blank"
			//	)
			//}
			//$state.transition.then(function(toState){
			//	video.clicked = true;
			//	return VideoModel.update(video);
			//});
		//},
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
	            type: 'video/mp4'
	        }
	    ],
	    poster: $scope.video.poster
	};

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.video.id;
	    ViewModel.create($scope.viewModel);
	}

	console.log($scope.video.bids)
	console.log($scope.user)

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


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

	// $scope.share = function(){
	// 	$uibModal.open({
	// 		animation: true,
	// 		templateUrl: "video/templates/share.tpl.html",
	// 		controller: "ShareCtrl",
	// 		resolve: {
	// 			video: function(){
	// 				return video
	// 			}
	// 		}
	// 	});
	// };

	$scope.share = function(ev) {
    // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: "ShareDialogCtrl",
      templateUrl: 'video/templates/shareDialog.tpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      // fullscreen: useFullScreen
			resolve: {
				user: function(UserModel){
						return UserModel.getMine();
				}
			}
    })

    // $scope.$watch(function() {
    //   return $mdMedia('xs') || $mdMedia('sm');
    // }, function(wantsFullScreen) {
    //   $scope.customFullscreen = (wantsFullScreen === true);
    // });
  };

	$scope.clickThrough = function(){
		$scope.video.clicked = true;
		//ClickModel.create().then(function(){
			//$location.path(/campaign/+video.campaign.urlTitle)
		//});
		VideoModel.update($scope.video).then(function(){
			$location.path(/campaign/+video.campaign.urlTitle)
		});


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

})

.controller('BidCtrl', function ($scope, highestBid, video, config, campaigns, BidModel, $uibModalInstance ) {

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

})

.controller('ShareCtrl', function ($scope, video ) {
	$scope.video = video;
})

.controller('ShareDialogCtrl', function ($scope, $location, $mdDialog, ezfb, user, UserModel, ShareModel, localStorageService ) {

	localStorageService.set('shareUrl', $location.absUrl());
	$scope.user = user;

	var shareUrl = localStorageService.get('shareUrl');
	$scope.tweeting = false;

	$scope.tweetCompPadding = shareUrl.length + ' @cre8bidio '.length;
	console.log($scope.tweetCompPadding)

	$scope.shareFacebook = function() {
		console.log('share facebook')
		$mdDialog.cancel();

		// shareService.facebookShare();

		// window.location = "https://www.facebook.com/dialog/share?app_id=629279003894718"
		// 	+ "&display=popup"
		// 	+ "&href=" + encodeURIComponent(shareUrl)
		// 	+ "&redirect_uri=" + encodeURIComponent(shareUrl);

		ezfb.ui(
     	{
        method: 'share',
			// href: 'www.google.com',
			href: 'www.bidio.co',
			name: 'name',
        	// picture: 'file:///Users/sueserene/projects/bidio/assets/images/video-overlay.png',
			picture: 'https://2static1.fjcdn.com/comments/Haven+t+slept+well+lately+so+sleep+tight+pupper+may+flights+_f76daa893b0a5921705ff727db77b2dc.jpg',
        	description: 'description',
			hashtag: '#ohshootwaddup',
      },
      function (res) {
		console.log(res);
        // res: FB.ui response
      }
    );


	};

	$scope.shareTwitter = function() {

		if ($scope.tweeting) {
			console.log('share twitter')
			console.log('user' + $scope.user)

			var composition = $scope.share.composition //+ ' ' + shareUrl + ' @cre8bidio';

			// COMPOSISTION MUST LEAVE ROOM FOR LINK TO WEBSITE: localstorage url length etc
			// AND MUST LEAVE ROOM FOR @cre8bidio (10 chars)

			if ($scope.user === undefined) {
				var webIntentURL = 'https://twitter.com/intent/tweet?text='
	      		window.open(webIntentURL + encodeURIComponent(composition)
					+ '&url=' + encodeURIComponent(shareUrl)
					+ '&via=cre8bidio')
				}
			else {
				ShareModel.shareTwitter(composition)
			}
		}
		else {
			$scope.tweeting = !$scope.tweeting;
		}

		// var composition = 'test composition';
		// var tokens;

		// for (var i in $scope.user.passports) {
		// 	if ($scope.user.passports[i].provider === 'twitter')
		// 		tokens = $scope.user.passports[i].tokens;
		// }

		// if (tokens)
		// 	ShareModel.shareTwitter()
		// 	// shareService.tweetVideo(composition, tokens)
		// else {
		// 	console.log('no tokens')
		// }


	};

	$scope.cancel = function() {
    $mdDialog.cancel();
  };
});
