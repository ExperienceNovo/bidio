angular.module( 'bidio.market', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'market', {
		url: '/market/:id',
		views: {
			"main": {
				controller: 'MarketCtrl',
				templateUrl: 'market/index.tpl.html'
			}
		}
	});
}])

.controller( 'MarketCtrl', ['$scope', 'titleService', function MarketController( $scope, titleService ) {
	titleService.setTitle('bidio - market');
}]);