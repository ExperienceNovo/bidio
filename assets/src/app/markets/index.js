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
				return [];
				//return OrderModel.getAll();
				//return [{args:{_member:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', _orderExchangeIdentifier:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', _orderExchangeAmount: 1, _orderExchangeIdentifier1:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFA', _orderExchangeAmount1:28}}];
			}]
		}
	});
}])

.controller( 'MarketsCtrl', ['$mdDialog', '$rootScope', '$scope', 'config', 'titleService', 'orders', function MarketsController( $mdDialog, $rootScope, $scope, config, titleService, orders ) {
	titleService.setTitle('bidio - market');
	$scope.curretUser = config.currentUser;
	$scope.orders = orders;

	//ORDERS WEB3 FILTER.... ~sockets etc --> same 'filters' --> for videos / dash..
	$scope.test = [];
	//THIS FILTER ACTUALL WORKS!!!!!!!
	var marketEvent = $rootScope.marketContractInstance.CreateOrder({_to: ''}, {fromBlock: 0, toBlock: 'latest'});
    marketEvent.watch(function(error, result){
        $scope.orders.push(result)
        $scope.test.push(result);
        $scope.$apply();
		console.log(error, result);
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
        	$scope.orders.push({args:result});
        });
	};

}])

.controller('MarketsBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'OrderModel', function ($scope, $mdDialog, BidModel, config, OrderModel ) {

	$scope.order = {};
	$scope.order._member = config.currentUser.walletAddress;
	$scope.order._orderExchangeAmount = [];
	$scope.order._orderExchangeIdentifier = [];
	$scope.order._orderExchangeAmount1 = [];
	$scope.order._orderExchangeIdentifier1 = [];

	$scope.createBid = function(){
		console.log($scope.order)
		OrderModel.create($scope.order);
		$mdDialog.hide($scope.order);
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])
