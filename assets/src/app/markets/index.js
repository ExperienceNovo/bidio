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
				return [1,2,3,4,5,6,7,8];
			}]
		}
	});
}])

.controller( 'MarketsCtrl', ['$mdDialog', '$rootScope', '$scope', 'config', 'titleService', 'orders', function MarketsController( $mdDialog, $rootScope, $scope, config, titleService, orders ) {
	titleService.setTitle('bidio - market');
	$scope.orders = orders;
    console.log('hello')

	//ORDERS WEB3 FILTER.... ~sockets etc --> same 'filters' --> for videos / dash..
	/*console.log($rootScope.marketContractInstance.allEvents())
	$rootScope.marketContractInstance.allEvents().watch(function(error, event){
        console.log(event);
    });

    // Or pass a callback to start watching immediately
    $rootScope.marketContractInstance.allEvents(function(error, log){
        console.log(log);
    });

    $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'})
    .watch(function(error, result){
        console.log(error, result);
    });

    $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'})
    .get(function(error, logs){
        console.log(error, logs);
    });*/


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
	$scope.order.member = '';//config.currentUser.walletAddress
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
