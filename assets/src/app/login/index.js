angular.module( 'bidio.login', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'login', {
		url: '/login',
		views: {
			"main": {
				controller: 'LoginCtrl',
				templateUrl: 'login/index.tpl.html'
			}
		}
	});
}])

.controller( 'LoginCtrl', ['$location', '$scope', 'config', 'localStorageService', 'titleService', function LoginController( $location, $scope, config, localStorageService, titleService ) {
	titleService.setTitle('login | bidio');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')};

	//why
	if (localStorageService.get('redirectTo')) {
		$location.path(localStorageService.get('redirectTo'));
		localStorageService.remove('redirectTo');
	}

	if (window.location.hash && window.location.hash == '#_=_')
		window.location.hash = '';

	$scope.go = function(path) {$location.path(path)};

}]);
