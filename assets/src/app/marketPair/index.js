angular.module( 'bidio.marketPair', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'marketPair', {
		url: '/market/:asset1/:asset2',
		views: {
			"main": {
				controller: 'MarketPairCtrl',
				templateUrl: 'marketPair/index.tpl.html'
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

.controller( 'MarketPairCtrl', ['$location', '$mdDialog', '$rootScope', '$scope', '$stateParams', 'config', 'titleService', 'orders', function MarketPairController( $location, $mdDialog, $rootScope, $scope, $stateParams, config, titleService, orders ) {
	titleService.setTitle($stateParams.asset1+' market | bidio');
	$scope.currentUser = config.currentUser;
    $scope.stateParams = $stateParams;
    $scope.orders = orders;
    
	$scope.chart = {
        chart: {
            zoomType: 'x',
        },
        series: [{
            type: 'column',
            name: 'Bids',
            data: [0, 0, 0, 0, 56, 59, 85, 121]
        },{
            type: 'column',
            name: 'Asks',
            data: [109, 72, 55, 35, 0, 0, 0, 0]
        }],
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: 'Price'
            }
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        credits:{enabled:false},
        //chartType:'stock'
    };

	$scope.labels = ["1", "2", "3", "4", "5", "6", "7", "8"];
	$scope.series = ['Bids', 'Asks'];
	$scope.data = [
	    [0, 0, 0, 0, 56, 59, 85, 121],
	    [109, 72, 55, 35, 0, 0, 0, 0]
	];



	//THIS FILTER ACTUALLY WORKS!!!!!!!
	//hardcode general, and cre8.. or figure out string
	if ($stateParams.asset1.length == 42){
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
				controller: 'MarketPairBidCtrl',
				templateUrl: 'marketPair/templates/bid.tpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				resolve: {
					asset1: [function(){
						return $scope.stateParams.asset1;
					}],
					asset2: [function(){
						return $scope.stateParams.asset2;
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

.controller('MarketPairBidCtrl', ['$scope', '$mdDialog', 'asset1', 'asset2', 'BidModel', 'config', 'OrderModel', function MarketPairBidController($scope, $mdDialog, asset1, asset2, BidModel, config, OrderModel) {

	$scope.asset1 = asset1;
	$scope.asset2 = asset2;

	$scope.order = {};
	$scope.order._member = config.currentUser.walletAddress;
	//$scope.order._orderExchangeAmount = 1;
	$scope.order._orderExchangeIdentifier = asset1;
	//$scope.order._orderExchangeAmount1 = [];
	$scope.order._orderExchangeIdentifier1 = asset2;


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