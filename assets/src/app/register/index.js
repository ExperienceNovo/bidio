angular.module( 'bidio.register', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		}
	});
})

.controller( 'RegisterCtrl', function RegisterController( $scope, titleService, config, $location ) {
	titleService.setTitle('register');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){
		$location.path('/');
	};

	$scope.go = function(path) {
	  	$location.path(path);
	};

});
