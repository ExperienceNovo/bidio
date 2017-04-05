angular.module( 'bidio.discover', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'discover', {
		url: '/discover',
		views: {
			"main": {
				controller: 'DiscoverCtrl',
				templateUrl: 'discover/index.tpl.html'
			}
		},
		resolve:{
			videos: ['VideoModel', function(VideoModel){
				return VideoModel.getAll();
			}]
		}
	});
}])

.controller( 'DiscoverCtrl', ['$rootScope','$sce', '$scope', 'config', 'SearchModel', 'titleService', 'videos', function DiscoverCtrl( $rootScope, $sce, $scope, config, SearchModel, titleService, videos ) {
	titleService.setTitle('bidio - discover');
	$scope.videos = videos;
 	$scope.defaultposter = 'images/video-overlay.png';
 	for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.defaultposter
    	}
    }
 	$scope.keyPress = function(searchValue){
 		if (searchValue != ''){
 			$rootScope.stateIsLoading = true;
	        SearchModel.search(searchValue, 100, 0).then(function(models){
	            $scope.videos = models;
	            $rootScope.stateIsLoading = false;
	        });
	        for (x in $scope.videos){
	        	$scope.videos[x].media = {
	        		sources: [
				        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
		    		],
		    		poster: $scope.defaultposter//thumbnail
		    	}
	        }
    	}
    };
}]);
