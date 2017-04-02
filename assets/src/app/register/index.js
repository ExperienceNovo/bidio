angular.module( 'bidio.register', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'register', {
		url: '/register',
		views: {
			"main": {
				controller: 'RegisterCtrl',
				templateUrl: 'register/index.tpl.html'
			}
		}
	});
}])

.controller( 'RegisterCtrl', ['$location', '$scope', 'config', 'titleService', function RegisterController( $location, $scope, config, titleService ) {
	titleService.setTitle('bidio - register');
	$scope.currentUser = config.currentUser;
	if ($scope.currentUser){$location.path('/')};
	if (window.location.hash && window.location.hash == '#_=_'){window.location.hash = ''}
	$scope.go = function(path) {$location.path(path)};
}]);
