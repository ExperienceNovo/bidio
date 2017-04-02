angular.module( 'bidio.resetSuccess', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'resetSucess', {
		url: '/reset-success',
		views: {
			"main": {
				controller: 'ResetSuccessCtrl',
				templateUrl: 'reset/success/index.tpl.html'
			}
		}
	});
}])

.controller( 'ResetSuccessCtrl', ['$scope', 'config', 'titleService', function ResetController( $scope, config, titleService ) {
	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio - success!');
	$scope.currentUser = config.currentUser;
}]);
