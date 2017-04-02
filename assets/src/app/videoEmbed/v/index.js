angular.module( 'bidio.videoEmbed', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'videoEmbed', {
		url: '/v/:id',
		views: {
			"main": {
				controller: 'VideoEmbedCtrl',
				templateUrl: 'videoEmbed/v/index.tpl.html'
			}
		},
		resolve: {
			video: ['$stateParams', 'VideoModel', function($stateParams, VideoModel){
				return VideoModel.getOne($stateParams.id);
			}]
		}
	});
}])

.controller( 'VideoEmbedCtrl', ['$location', '$sailsSocket', '$scope', 'ClickModel', 'config', 'lodash', 'titleService', 'video', 'ViewModel', 'VideoModel', function VideoEmbedCtrl( $location, $sailsSocket, $scope, ClickModel, config, lodash, titleService, video, ViewModel, VideoModel ) {
	console.log('hello')
	$scope.currentUser = config.currentUser;
	$scope.video = video;
    $scope.video.poster = 'images/video-overlay.png'
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	titleService.setTitle(video.title + ' - bidio');
	$scope.viewModel = {};
	$scope.media = {
	    sources: [{src: $scope.video.amazonUrl, type: 'video/webm'}],
	    poster: $scope.video.poster
	};

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	    $scope.viewModel.video = $scope.video.id;
		$scope.viewModel.bid = $scope.highestBid;
	    ViewModel.create($scope.viewModel);
	}

	$scope.clickThrough = function(){
		ClickModel.create($scope.viewModel);
		$location.path(/campaign/+$scope.video.campaign.urlTitle);
	};

    $sailsSocket.subscribe('video', function (envelope) {
        switch(envelope.verb) {
            case 'updated':
            	$scope.video = envelope.data;
            	console.log(envelope.data)
                break;
        }
    });

}])
