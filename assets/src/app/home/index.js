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
			trendingVideos: ['VideoModel', function(VideoModel){
				return VideoModel.getAll();
			}],
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

.controller( 'HomeCtrl', ['$scope', 'config', 'featuredCampaigns', 'featuredVideos', 'titleService', 'trendingVideos', 'videos', function HomeController( $scope, config, featuredCampaigns, featuredVideos, titleService, trendingVideos, videos ) {
	titleService.setTitle('bidio');
	$scope.videos = videos;
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;
    $scope.campaign = {};

	/*$scope.campaign.media = {
        sources: [
            {
                src: $scope.campaign.videoUrl,
                type: 'video/mp4'
            }
        ],
        poster: $scope.campaign.poster
    };*/

    $scope.campaign.matt = {
        sources: [
            {
                src: 'https://bidio8.s3.amazonaws.com/2057b5ee-6c67-498e-a6cc-963d26ede0a7.mp4',
                type: 'video/mp4'
            }
        ]    
    };

}]);
