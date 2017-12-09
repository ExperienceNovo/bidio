angular.module( 'bidio.markets', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'markets', {
		url: '/market',
		views: {
			"main": {
				controller: 'MarketsCtrl',
				templateUrl: 'markets/index.tpl.html'
			}
		}
	});
}])

.controller( 'MarketsCtrl', ['$scope', 'titleService', function MarketsController( $scope, titleService ) {
	titleService.setTitle('bidio - market');
}]);