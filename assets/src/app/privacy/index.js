angular.module( 'bidio.privacy', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'privacy', {
		url: '/privacy',
		views: {
			"main": {
				controller: 'PrivacyCtrl',
				templateUrl: 'privacy/index.tpl.html'
			}
		}
	});
}])

.controller( 'PrivacyCtrl', ['$scope', 'titleService', function PrivacyController( $scope, titleService ) {
	titleService.setTitle('privacy | bidio');
}]);