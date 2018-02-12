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
			}]
		}
	});
}])

.controller( 'MarketsCtrl', ['$location', '$mdDialog', '$rootScope', '$scope', 'config', 'titleService', 'orders', function MarketsController( $location, $mdDialog, $rootScope, $scope, config, titleService, orders ) {
	titleService.setTitle('bidio - market');
	$scope.currentUser = config.currentUser;
	$scope.orders = orders;
	$scope.newLookup = {};

	//ORDERS WEB3 FILTER.... ~sockets etc --> same 'filters' --> for videos / dash..
	var marketEvent = $rootScope.marketContractInstance.CreateOrder({_to: ''}, {fromBlock: 0, toBlock: 'latest'});
    marketEvent.watch(function(error, result){
        $scope.orders.push(result)
        $scope.$apply();
		console.log(error, result);
    });

    $scope.tokenLookup = function(){
    	$location.path('/market/'+ $scope.newLookup.tokenIdentifier)
    }

	$scope.bid = function(ev){
		if ($scope.currentUser){
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
    	}
    	else{$location.path('/register')}
	};

}])

.controller('MarketsBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'OrderModel', function ($scope, $mdDialog, BidModel, config, OrderModel ) {

	$scope.order = {};
	$scope.order._member = config.currentUser.walletAddress;
	//$scope.order._orderExchangeAmount = [];
	//$scope.order._orderExchangeIdentifier = [];
	//$scope.order._orderExchangeAmount1 = [];
	//$scope.order._orderExchangeIdentifier1 = [];

	$scope.createBid = function(){
		console.log($scope.order)
		OrderModel.create($scope.order);
		$mdDialog.hide($scope.order);
	};

	$scope.cancel = function() {
		$mdDialog.cancel();
	};

}])
