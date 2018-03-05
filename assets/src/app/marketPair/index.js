angular.module( 'bidio.marketPair', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'market', {
		url: '/market/:asset1/:asset2',
		views: {
			"main": {
				controller: 'MarketCtrl',
				templateUrl: 'market/index.tpl.html'
			}
		},
		resolve:{
			orders: ['OrderModel', function(OrderModel){
				return [];
				//return OrderModel.getAll();
				//return [{member:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeIdentifier:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB', orderExchangeAmount: 1, orderExchangeIdentifier1:'0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFA', orderExchangeAmount1:28}];
			}]
		}
	});
}])

.controller( 'MarketCtrl', ['$location', '$mdDialog', '$rootScope', '$scope', '$stateParams', 'config', 'titleService', 'orders', function MarketController( $location, $mdDialog, $rootScope, $scope, $stateParams, config, titleService, orders ) {
	titleService.setTitle($stateParams.id+' market | bidio');
	$scope.currentUser = config.currentUser;
    $scope.stateParams = $stateParams;
    $scope.orders = orders;
    

    

	//THIS FILTER ACTUALLY WORKS!!!!!!!
	//hardcode general, and cre8.. or figure out string
	if ($stateParams.id.length == 42){
		var marketEvent = $rootScope.marketContractInstance.CreateOrder({_orderExchangeIdentifier: $stateParams.id}, {fromBlock: 0, toBlock: 'latest'});
	    marketEvent.watch(function(error, result){
	        $scope.orders.push(result);
			$scope.$apply();
			console.log(error, result);
	    });
	}

	$scope.bid = function(ev){
		if ($scope.currentUser){
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
	        	$scope.orders.push({args:result});
	        });
    	}
    	else{$location.path('/register')}
	};


}])

.controller('MarketBidCtrl', ['$scope', '$mdDialog', 'BidModel', 'config', 'market', 'OrderModel', function MarketBidController($scope, $mdDialog, BidModel, config, market, OrderModel) {

	$scope.market = market;
	$scope.order = {};
	$scope.order._member = config.currentUser.walletAddress;
	//$scope.order._orderExchangeAmount = 1;
	$scope.order._orderExchangeIdentifier = market;
	//$scope.order._orderExchangeAmount1 = [];
	//$scope.order._orderExchangeIdentifier1 = [];


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