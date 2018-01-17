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
		},
		resolve:{
			orders: function(OrderModel){
				//return OrderModel.getAll();
				return [1,2,3,4,5,6,7,8];
			}
		}
	});
}])

.controller( 'MarketCtrl', ['$mdDialog', '$scope', '$stateParams', 'titleService', 'orders', function MarketController( $mdDialog, $scope, $stateParams, titleService, orders ) {
	titleService.setTitle('bidio - '+$stateParams.id+' market');
    $scope.stateParams = $stateParams;
    $scope.orders = orders;

	$scope.bid = function(ev){
	    $mdDialog.show({
			controller: 'MarketBidCtrl',
			templateUrl: 'market/templates/bid.tpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,
			resolve: {
				market: [function(){
					return $scope.stateParams.id;
				}]
			}
		})
        .then(function(result){
        	console.log(result)
        });
	};


}])

.controller('MarketBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'market', 'OrderModel', function ($scope, $mdDialog, BidModel, config, market, OrderModel) {

	$scope.market = market;

	$scope.order = {};
	$scope.order.member = '';
	$scope.order.orderExchangeAmount = [market];
	$scope.order.orderExchangeIdentifier = [];
	$scope.order.orderExchangeAmount1 = [];
	$scope.order.orderExchangeIdentifier1 = [];


	$scope.createOrderAsset = function(value){
		//$scope.assetArray.push(value)
	};

	$scope.createBid = function(bid){
		OrderModel.create($scope.order);
		$mdDialog.cancel();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])