angular.module( 'bidio.videoEmbed', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'videoEmbed', {
		url: '/v/:id',
		views: {
			"main": {
				controller: 'VideoEmbedCtrl',
				templateUrl: 'videoEmbed/index.tpl.html'
			}
		},
		resolve: {
			video: function(VideoModel, $stateParams){
				return VideoModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'VideoEmbedCtrl', function VideoEmbedCtrl( $scope, lodash, config, titleService, $sailsSocket, video, $location, $mdDialog, $uibModal, ViewModel, VideoModel, ClickModel, ezfb ) {
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

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.video.id;
	    ViewModel.create($scope.viewModel);
	}

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

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
