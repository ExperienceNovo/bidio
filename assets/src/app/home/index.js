angular.module( 'bidio.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve: {
			trendingVideos: function(VideoModel){
				return VideoModel.getAll();
			},
			featuredCampaigns: function(CampaignModel){
				return CampaignModel.getFeatured();
			},
			campaign: function(CampaignModel){
				return CampaignModel.getByUrl("railhawks-tryouts.8");
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, trendingVideos, campaign, featuredCampaigns, $sce ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	campaign.title = $sce.trustAsHtml(campaign.title)
	$scope.campaign = campaign;
	console.log(campaign)
	$scope.campaign.media = {
        sources: [
            {
                src: $scope.campaign.videoUrl,
                type: 'video/mp4'
            }
        ],
        poster: $scope.campaign.poster
    }
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;
});
