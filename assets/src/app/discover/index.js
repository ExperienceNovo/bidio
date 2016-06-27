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
				return VideoModel.getAll();
			}
		}
	});
})

.controller( 'DiscoverCtrl', function DiscoverCtrl( $scope, config, titleService, $sce, videos, SearchModel ) {
	titleService.setTitle('discover - bidio');
	$scope.videos = videos;
 	$scope.defaultposter = 'images/video-overlay.png';
 	for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {
		            src: $scope.videos[x].amazonUrl,
		            type: 'video/mp4'
		        }
    		],
    		poster: $scope.defaultposter
    	}
    }
 	$scope.keyPress = function(searchValue){
 		if (searchValue != ''){
	        SearchModel.search(searchValue, 100, 0).then(function(models){
	            $scope.videos = models;
	        });
	        for (x in $scope.videos){
	        	$scope.videos[x].media = {
	        		sources: [
				        {
				            src: $scope.videos[x].amazonUrl,
				            type: 'video/mp4'
				        }
		    		],
		    		poster: $scope.defaultposter
		    	}
		    	console.log($scope.videos[x].media)
	        }
    	}
    }
});
