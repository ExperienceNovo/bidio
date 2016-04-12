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
		}
	});
})

.controller( 'DiscoverCtrl', function DiscoverCtrl( $scope, config, titleService, CampaignModel, campaign, $sce ) {

});
