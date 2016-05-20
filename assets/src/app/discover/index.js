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
				return VideoModel.gatAll();
				//return VideoModel.getSome(0, 100);
			}
		}
	});
})

.controller( 'DiscoverCtrl', function DiscoverCtrl( $scope, config, titleService, $sce, videos, SearchModel ) {
	titleService.setTitle('discover - bidio');
	$scope.videos = videos;
 	$scope.defaultposter = 'images/video-overlay.png';
 	$scope.keyPress = function(searchValue){
 		if (searchValue != ''){
	        SearchModel.search(searchValue, 100, 0).then(function(models){
	            $scope.videos = models;
	        });
    	}
    }
});
