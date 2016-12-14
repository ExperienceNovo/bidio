angular.module( 'bidio.reset', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'reset', {
		url: '/reset/:token',
		views: {
			"main": {
				controller: 'ResetCtrl',
				templateUrl: 'reset/index.tpl.html'
			}
		}
	});
})

.controller( 'ResetCtrl', function ResetController( $scope, titleService, config, $stateParams ) {

	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;

	/*setup token validation or nah??*/
	$scope.actionUrl = "/api/user/reset/" + $stateParams.token;

});
