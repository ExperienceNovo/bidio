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
		},
		resolve:{
			orders: function(OrderModel){
				//return OrderModel.getAll();
				return [1,2,3,4,5,6,7,8];
			}
		}
	});
}])

.controller( 'MarketsCtrl', ['$mdDialog', '$scope', 'titleService', 'orders', function MarketsController( $mdDialog, $scope, titleService, orders ) {
	titleService.setTitle('bidio - market');
	$scope.orders = orders;
	//ORDERS WEB3 FILTER.... ~sockets etc --> same 'filters' --> for videos / dash..


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

.controller('MarketsBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'OrderModel', function ($scope, $mdDialog, BidModel, config, OrderModel ) {

	$scope.order = {};
	$scope.order.member = '';
	$scope.order.orderExchangeAmount = [];
	$scope.order.orderExchangeIdentifier = [];
	$scope.order.orderExchangeAmount1 = [];
	$scope.order.orderExchangeIdentifier1 = [];

	$scope.createBid = function(bid){
		OrderModel.create($scope.order);
		$mdDialog.cancel();
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])
