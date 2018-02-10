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
			orders: ['OrderModel', function(OrderModel){
				//return OrderModel.getAll();
				return [{member:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeIdentifier:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeAmount: 1, orderExchangeIdentifier1:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFA', orderExchangeAmount1:28}];
			}]
		}
	});
}])

.controller( 'MarketsCtrl', ['$mdDialog', '$rootScope', '$scope', 'config', 'titleService', 'orders', function MarketsController( $mdDialog, $rootScope, $scope, config, titleService, orders ) {
	titleService.setTitle('bidio - market');
	$scope.orders = orders;

	//ORDERS WEB3 FILTER.... ~sockets etc --> same 'filters' --> for videos / dash..

	var marketEvent = $rootScope.marketContractInstance.CreateOrder({fromBlock: 0, toBlock: 'latest'});

    marketEvent.watch(function(error, result){
        console.log(error, result);
        $scope.orders.push(result);
    });

	var myResults = marketEvent.get(function(error, logs){
    	console.log(logs);
	});


	$scope.bid = function(ev){
	    $mdDialog.show({
			controller: 'MarketsBidCtrl',
			templateUrl: 'markets/templates/bid.tpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: true,

		})
        .then(function(result){
        	console.log(result);
        	$scope.orders.push(result);
        });
	};

}])

.controller('MarketsBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'OrderModel', function ($scope, $mdDialog, BidModel, config, OrderModel ) {

	$scope.order = {};
	$scope.order.member = config.currentUser.walletAddress;
	$scope.order.orderExchangeAmount = [];
	$scope.order.orderExchangeIdentifier = [];
	$scope.order.orderExchangeAmount1 = [];
	$scope.order.orderExchangeIdentifier1 = [];

	$scope.createBid = function(){
		console.log($scope.order)
		OrderModel.create($scope.order);
		$mdDialog.hide($scope.order);
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])
