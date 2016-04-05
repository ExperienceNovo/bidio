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

.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video, $location, $sce ) {
	titleService.setTitle(video.title + ' - bidio');
	$scope.video = video;

	$scope.viewCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

});