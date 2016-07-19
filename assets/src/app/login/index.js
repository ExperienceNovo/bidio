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

	// if (localStorageService.get('redirectTo') === '/dashboard/profile/edit') {
	// 	$location.path('/dashboard/profile/edit');
	// 	localStorageService.remove('redirectTo');
	// 	console.log(localStorageService.get('redirectTo'));
	// }

	if (localStorageService.get('redirectTo')) {
		$location.path(localStorageService.get('redirectTo'));
		localStorageService.remove('redirectTo');
	}

	// remove fb's appended hash
	// var x = window.location.toString().indexOf("#_=_");
	// if (x > 0) {
	//
	// 	window.location = window.location.toString().substring(0, x);
	// }
	if (window.location.hash && window.location.hash == '#_=_')
		window.location.hash = '';

	$scope.go = function(path) {
	  	$location.path(path);
	};

});
