angular.module( 'bidio.login', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
})

.controller( 'LoginCtrl', function LoginController( $scope, titleService, config, $location, localStorageService ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){
		$location.path('/');
	};

	$scope.go = function(path) {
	  	$location.path(path);
	};

});
