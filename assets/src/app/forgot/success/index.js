angular.module( 'bidio.forgotSuccess', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'forgotSuccess', {
		url: '/forgot/success',
		views: {
			"main": {
				controller: 'ForgotSuccessCtrl',
				templateUrl: 'forgot/success/index.tpl.html'
			}
		}
	});
}])

.controller( 'ForgotSuccessCtrl',['$scope','config', 'titleService' , function ForgotSuccessController( $scope, config, titleService ) {
	$scope.globalErr = config.globalErr;
	titleService.setTitle('bidio - success!');
	$scope.currentUser = config.currentUser;
}]);
