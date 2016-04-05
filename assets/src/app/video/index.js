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

<<<<<<< HEAD
.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video, $location, $sce, bids ) {
	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	$scope.bids = bids;
=======
.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video, $location, $sce ) {
>>>>>>> 4b9e4eefc7d363c4e6ed70251c544e138923c6bc
	titleService.setTitle(video.title + ' - bidio');
	$scope.video = video;

	$scope.viewCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


	$scope.createBid = function(){

	};

});