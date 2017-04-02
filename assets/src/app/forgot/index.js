angular.module( 'bidio.forgot', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'forgot', {
		url: '/forgot',
		views: {
			"main": {
				controller: 'ForgotCtrl',
				templateUrl: 'forgot/index.tpl.html'
			}
		}
	});
}])

.controller( 'ForgotCtrl', ['$scope', 'config', 'titleService',  function LoginController( $scope, config, titleService) {
	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio - forgot?');
	$scope.currentUser = config.currentUser;
}]);
