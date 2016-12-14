angular.module( 'bidio.resetSuccess', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'resetSucess', {
		url: '/reset-success',
		views: {
			"main": {
				controller: 'ResetSuccessCtrl',
				templateUrl: 'reset/success/index.tpl.html'
			}
		}
	});
})

.controller( 'ResetSuccessCtrl', function ResetController( $scope, titleService, config ) {

	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;

});
