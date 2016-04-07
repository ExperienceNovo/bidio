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
			bids: function(BidModel, video){
				return BidModel.getByVideo(video);
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, config titleService, video, $location, $sce, bids, BidModel ) {

	if (video.contest){
		video.contest.title = $sce.trustAsHtml(video.contest.title)
	}

	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	$scope.bids = bids;
	titleService.setTitle(video.title + ' - bidio');
	$scope.viewCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


	$scope.createBid = function(newBid){

		$scope.newBid.user = $scope.config.currentUser;
		$scope.newBid.video = video.id;
		BidModel.create($scope.newBid);
	};

});