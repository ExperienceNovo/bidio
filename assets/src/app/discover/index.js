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
				return VideoModel.getSome(48, 0, 'viewCount DESC');
			}]
		}
	});
}])

.controller( 'DiscoverCtrl', ['$rootScope','$sce', '$scope', 'config', 'SearchModel', 'titleService', 'VideoModel', 'videos', function DiscoverCtrl( $rootScope, $sce, $scope, config, SearchModel, titleService, VideoModel, videos ) {
	titleService.setTitle('bidio - discover');
	$scope.videos = videos;
	$scope.skip = 48
 	for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
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
    				poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
		    	}
	        }
    	}
    };
    $scope.loadMore = function(){
    	$rootScope.stateIsLoading = true;
    	$scope.skip = $scope.skip + 48;
		VideoModel.getSome(48, $scope.skip, 'viewCount DESC').then(function(videos) {
			$rootScope.stateIsLoading = false;
			Array.prototype.push.apply($scope.videos, videos);
		});
    };
}]);
