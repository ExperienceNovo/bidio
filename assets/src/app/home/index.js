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
				//return VideoModel.getAll();
				return VideoModel.getSome(48, 0, 'viewCount DESC');
			}]
		}
	});
}])

.controller( 'HomeCtrl', ['$rootScope', '$scope', 'config', 'featuredCampaigns', 'featuredVideos', 'titleService', 'VideoModel', 'videos', function HomeController( $rootScope, $scope, config, featuredCampaigns, featuredVideos, titleService, VideoModel, videos ) {
	titleService.setTitle('bidio');
	$scope.videos = videos;
	$scope.currentUser = config.currentUser;
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;
    $scope.campaign = {};
    $scope.sort = 'viewCount DESC';
	$scope.sortText = {'trendingScore DESC':'Trending','createdAt DESC':'Date Created', 'viewCount DESC': 'View Count'}
	$scope.skip = 48;

	$scope.videoList = ['videos/energy.mp4', 'videos/cube.mp4'];//, 'videos/fire.mp4'];
	$scope.video = $scope.videoList[Math.floor(Math.random()*$scope.videoList.length)];
		
	$scope.selectSort = function(sort){
		$scope.sort = sort;
		$rootScope.stateIsLoading = true;
		VideoModel.getSome(48, $scope.skip, $scope.sortText).then(function(videos) {
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

    $scope.loadMore = function(){
    	$rootScope.stateIsLoading = true;
    	$scope.skip = $scope.skip + 48;
		VideoModel.getSome(48, $scope.skip, 'viewCount DESC').then(function(videos) {
			$rootScope.stateIsLoading = false;
			Array.prototype.push.apply($scope.videos, videos);
			for (x in $scope.videos){
		    	$scope.videos[x].media = {
		    		sources: [
				        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
		    		],
		    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
		    	}
		    }
		});
    }

}]);