angular.module( 'bidio.privacy', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'privacy', {
		url: '/privacy',
		views: {
			"main": {
				controller: 'CreatorsCtrl',
				templateUrl: 'privacy/index.tpl.html'
			}
		}
	});
})

.controller( 'PrivacyCtrl', function PrivacyController( $scope, titleService ) {
	titleService.setTitle('Privacy - bidio');
});