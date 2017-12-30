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

.controller( 'MarketCtrl', ['$mdDialog', '$scope', 'titleService', function MarketController( $mdDialog, $scope, titleService ) {
	titleService.setTitle('bidio - market');

	$scope.bid = function(ev){
	    $mdDialog.show({
			controller: 'MarketBidCtrl',
			templateUrl: 'market/templates/bid.tpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,

		})
        .then(function(result){
        	console.log(result)
        });
	};


}])

.controller('MarketBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', function ($scope, $mdDialog, BidModel, config ) {

	$scope.createBid = function(bid){
		BidModel.create(bid).then(function(result){
			//$uibModalInstance.close(result)
			$mdDialog.hide(result);
		});
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])