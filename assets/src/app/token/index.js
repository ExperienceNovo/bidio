angular.module( 'bidio.token', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'token', {
		url: '/token',
		views: {
			"main": {
				controller: 'TokenCtrl',
				templateUrl: 'token/index.tpl.html'
			}
		}
	});
}])

.controller( 'TokenCtrl', ['$scope', 'titleService', function TokenController( $scope, titleService ) {
	titleService.setTitle('CRE8BID.IO | CREATE THE NEXT WAVE');

	$scope.totalEth  = ((Math.round(+new Date()/1000) - 1515710442)/60).toFixed(4);
	$scope.tokenPrice = (Math.pow(2, Math.log($scope.totalEth*60))/100 - 2309500).toFixed(8);
	$scope.totalToken =  Math.floor(100 * $scope.totalEth / $scope.tokenPrice);

	//TOKEN CONTRACT
	$scope.ethWeb3 = new Web3();
	$scope.tokenAbi = [{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]
    $scope.tokenAddress = '0x6c728ed572633d08cbea0e7ed7aadbf2f044788f';
    $scope.tokenContract = $scope.ethWeb3.eth.contract($scope.tokenAbi);
    $scope.tokenContractInstance = $scope.tokenContract.at($scope.tokenAddress);

	//$scope.totalEth = $scope.tokenContractInstance.getTotalEthRecieved();
	//$scope.totalToken = $scope.tokenContractInstance.getTotalTokenSupply();
	//$scope.tokenPrice = $scope.tokenContractInstance.getTokenPrice();

	//$scope.purchaseTokens = $scope.ethWeb3.tokenContractInstance.purchaseTokens(address);


	$scope.getPrice = function(){
		var unix = Math.round(+new Date()/1000);
		var power = Math.log(unix)/100
		$scope.tokenPrice = (Math.pow(2, power)/2 - 2309500/2).toFixed(8);
		$scope.totalToken = (Math.floor(100 * $scope.totalEth / $scope.tokenPrice)*power).toFixed(0);
	};


	//reload every second ? 
	$scope.getPrice();

}]);