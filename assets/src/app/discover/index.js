angular.module( 'bidio.discover', [
	])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'discover', {
		url: '/discover',
		views: {
			"main": {
				controller: 'DiscoverCtrl',
				templateUrl: 'discover/index.tpl.html'
			}
		},
		resolve:{
			videos: function(VideoModel){
				//return null;
				return VideoModel.getAll();
			}
		}
	});
})

.controller( 'DiscoverCtrl', function DiscoverCtrl( $scope, config, titleService, $sce, videos ) {
	$scope.videos = videos;
  $scope.defaultposter = 'images/video-overlay.png'
});
