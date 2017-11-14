angular.module( 'bidio.token', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'token', {
		url: '/token',
		views: {
			"main": {
				controller: 'TokenCtrl',
				templateUrl: 'token/index.tpl.html'
			}
		}
	});
}])

.controller( 'TokenCtrl', ['$scope', 'titleService', function TokenController( $scope, titleService ) {
	titleService.setTitle('bidio - token');
}]);