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

.controller( 'MarketsCtrl', ['$mdDialog', '$scope', 'titleService', function MarketsController( $mdDialog, $scope, titleService ) {
	titleService.setTitle('bidio - market');
	$scope.bid = function(ev){
	    $mdDialog.show({
			controller: 'MarketsBidCtrl',
			templateUrl: 'markets/templates/bid.tpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,

		})
        .then(function(result){
        	console.log(result)
        });
	};
}])

.controller('MarketsBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', function ($scope, $mdDialog, BidModel, config ) {

	$scope.createBid = function(bid){
		BidModel.create(bid).then(function(result){
			//$uibModalInstance.close(result)
			$mdDialog.hide(result);
		});
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}]);