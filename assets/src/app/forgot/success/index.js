angular.module( 'countertools.forgotSuccess', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'forgotSuccess', {
		url: '/forgot/success',
		views: {
			"main": {
				controller: 'ForgotSuccessCtrl',
				templateUrl: 'forgot/success/index.tpl.html'
			}
		}
	});
})

.controller( 'ForgotSuccessCtrl',['$scope','config', 'titleService' , function ForgotSuccessController( $scope, config, titleService ) {
 
	$scope.globalErr = config.globalErr;
	titleService.setTitle('countertools');
	$scope.currentUser = config.currentUser;

}]);
