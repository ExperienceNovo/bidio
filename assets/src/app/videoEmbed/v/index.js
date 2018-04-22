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
	$scope.currentUser = config.currentUser;
	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	titleService.setTitle(video.title + ' - bidio');
	$scope.viewModel = {};
	$scope.media = {
	    sources: [{src: $scope.video.amazonUrl, type: 'video/'+$scope.video.amazonUrl.split('.').slice(-1)[0].toLowerCase()}],
	    poster: $scope.video.thumbnailUrl || 'images/video-overlay.png'
	};

	//MEDIA TYPES
	if($scope.media.sources[0].type == 'video/mov'){$scope.media.sources[0].type = 'video/mp4'}
	if($scope.media.sources[0].type == 'video/m4v'){$scope.media.sources[0].type = 'video/mp4'}
	if($scope.media.sources[0].type == 'video/mp3'){$scope.media.sources[0].type = 'audio/mp3'}


	var activeBid = video.bids.filter(function(bid){ return bid.isActive });
	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	if ($scope.currentUser){
		$scope.viewModel.user = $scope.currentUser.id;
	}
	$scope.viewModel.video = $scope.video.id;
	$scope.viewModel.bid = $scope.highestBid;
	ViewModel.create($scope.viewModel);

	$scope.clickThrough = function(){
		ClickModel.create($scope.viewModel);
		if($scope.video.campaign.doesRedirect){window.open($scope.video.campaign.redirectUrl, '_blank');}
		window.open(/campaign/+$scope.video.campaign.urlTitle, '_blank');
	};

    $sailsSocket.subscribe('video', function (envelope) {
        switch(envelope.verb) {
            case 'updated':
            	$scope.video = envelope.data;
            	//console.log(envelope.data)
                break;
        }
    });

}])
