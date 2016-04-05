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
			},
			bids: function(video){
				return video;
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video, $location, $sce, bids ) {
	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	$scope.bids = bids;
	titleService.setTitle(video.title + ' - bidio');
	$scope.trustedData = $sce.trustAsResourceUrl($scope.video.amazonUrl);

	$scope.options = {
		poster: 'images/bidio_logo.png'
    };
    
	$scope.media = {
	    sources: [
	        {
	            src: $scope.trustedData,
	            type: 'video/mp4'
	        }
	    ]
	}

	$scope.viewCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


	$scope.createBid = function(){

	};

});