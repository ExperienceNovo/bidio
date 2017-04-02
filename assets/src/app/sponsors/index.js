angular.module( 'bidio.sponsors', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'sponsors', {
		url: '/sponsors',
		views: {
			"main": {
				controller: 'SponsorsCtrl',
				templateUrl: 'sponsors/index.tpl.html'
			}
		}
	});
}])

.controller( 'SponsorsCtrl', ['$scope', 'titleService', function SponsorsController( $scope, titleService ) {
	titleService.setTitle('bidio - sponsors');
}]);