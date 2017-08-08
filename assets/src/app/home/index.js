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
			}]
		}
	});
}])

.controller( 'HomeCtrl', ['$scope', 'config', 'featuredCampaigns', 'featuredVideos', 'titleService', 'videos', function HomeController( $scope, config, featuredCampaigns, featuredVideos, titleService, videos ) {
	titleService.setTitle('bidio');
	$scope.videos = videos;
	$scope.currentUser = config.currentUser;
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;
    $scope.campaign = {};

    for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
    	}
    }

}]);