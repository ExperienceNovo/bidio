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
			campaign: function(CampaignModel){
				return CampaignModel.getByUrl("zaxbys-railhawks");
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, trendingVideos, campaign, $sce ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	campaign.title = $sce.trustAsHtml(campaign.title)
	$scope.campaign = campaign;

});
