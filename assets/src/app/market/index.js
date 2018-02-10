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
			orders: ['OrderModel', function(OrderModel){
				//return OrderModel.getAll();
				return [{member:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeIdentifier:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeAmount: 1, orderExchangeIdentifier1:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFA', orderExchangeAmount1:28}];
			}]
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
        	console.log(result);
        	$scope.orders.push(result);
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
		$mdDialog.hide($scope.order);
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])