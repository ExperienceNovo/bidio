angular.module( 'bidio.reset', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'reset', {
		url: '/reset/:token',
		views: {
			"main": {
				controller: 'ResetCtrl',
				templateUrl: 'reset/index.tpl.html'
			}
		}
	});
}])

.controller( 'ResetCtrl', ['$scope', '$stateParams', 'config', 'titleService', function ResetController( $scope, $stateParams, config, titleService ) {
	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio - reset');
	$scope.currentUser = config.currentUser;
	/*setup token validation or nah??*/
	$scope.actionUrl = "/api/user/reset/" + $stateParams.token;
}]);
