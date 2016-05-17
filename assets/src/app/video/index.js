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
		onExit: function($state, video, VideoModel){
			//if(video.campaign && video.campaign.doesRedirect){
			//	return window.open(
			//		video.campaign.redirectUrl,
			//		"_blank"
			//	)
			//}
			$state.transition.then(function(toState){
				video.clicked = true;
				return VideoModel.update(video);
			});
		},
		resolve: {
			video: function(VideoModel, $stateParams){
				return VideoModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, lodash, config, titleService, $sailsSocket, video, $location, $mdDialog, ViewModel, VideoModel, ClickModel ezfb ) {

	$scope.currentUser = config.currentUser;
	$scope.video = video;
    $scope.video.poster = 'images/video-overlay.png'
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	titleService.setTitle(video.title + ' - bidio');
	$scope.viewModel = {};

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.video.id;
	    ViewModel.create($scope.viewModel);
	}

	console.log($scope.video.bids)

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
      controller: ShareDialogController,
      templateUrl: 'video/templates/shareDialog.tpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
      // fullscreen: useFullScreen
    })

    // $scope.$watch(function() {
    //   return $mdMedia('xs') || $mdMedia('sm');
    // }, function(wantsFullScreen) {
    //   $scope.customFullscreen = (wantsFullScreen === true);
    // });
  };

	$scope.clickThrough = function(){
		$scope.video.clicked = true;
		//this adds a click model -- hmm... probably a better way..
		//want to check for unique user id here:

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
});

function ShareDialogController($scope, $mdDialog, ezfb) {
	$scope.shareFacebook = function() {
		console.log('share facebook')
		ezfb.ui(
      {
        method: 'share',
				// href: 'www.google.com',
				href: 'www.bidio.co',
				name: 'name',
        // picture: 'file:///Users/sueserene/projects/bidio/assets/images/video-overlay.png',
				picture: 'https://2static1.fjcdn.com/comments/Haven+t+slept+well+lately+so+sleep+tight+pupper+may+flights+_f76daa893b0a5921705ff727db77b2dc.jpg',
        description: 'description',
				hashtag: '#ohshootwaddup'

      },
      function (res) {
				console.log(res);
        // res: FB.ui response
      }
    );
	};
	$scope.shareTwitter = function() {
		console.log('share twitter')
	};
	$scope.cancel = function() {
    $mdDialog.cancel();
  };
};
