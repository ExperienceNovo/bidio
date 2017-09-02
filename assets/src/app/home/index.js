angular.module( 'bidio.home', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve: {
			featuredCampaigns:['CampaignModel', function(CampaignModel){
				return CampaignModel.getFeatured();
			}],
			featuredVideos: ['CampaignModel', function(CampaignModel){
				return CampaignModel.getFeatured();
			}],
			videos: ['VideoModel', function(VideoModel){
				return VideoModel.getAll();
				//return VideoModel.getSome(50,0, 'memberCount DESC');
			}]
		}
	});
}])

.controller( 'HomeCtrl', ['$rootScope', '$scope', 'config', 'featuredCampaigns', 'featuredVideos', 'titleService', 'videos', function HomeController( $rootScope, $scope, config, featuredCampaigns, featuredVideos, titleService, videos ) {
	titleService.setTitle('bidio');
	$scope.videos = videos;
	$scope.currentUser = config.currentUser;
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;
    $scope.campaign = {};
    $scope.sort = 'viewCount DESC';
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created', 'viewCount DESC': 'View Count'}

	$scope.selectSort = function(sort){
		$scope.sort = sort;
		$rootScope.stateIsLoading = true;
		VideoModel.getAll().then(function(videos) {//.getSome(50, $scope.skip, $scope.sort).then(function(videos) {
			$rootScope.stateIsLoading = false;
			$scope.videos = videos;
			for (x in $scope.videos){
		    	$scope.videos[x].media = {
		    		sources: [
				        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
		    		],
		    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
		    	}
		    }
		});
	};


    for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
    	}
    }

}]);