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
	$scope.totalEth  = ((Math.round(+new Date()/1000) - 1513305631)/60).toFixed(4);
	$scope.tokenPrice = (Math.pow(2, Math.log($scope.totalEth*60)) - 2306958).toFixed(8);
	$scope.totalToken =  Math.floor(100 * $scope.totalEth / $scope.tokenPrice);
	$scope.getPrice = function(){
		var unix = Math.round(+new Date()/1000);
		var power = Math.log(unix)
		$scope.tokenPrice = (Math.pow(2, power) - 2306958).toFixed(8);
		$scope.totalToken =  Math.floor(100 * $scope.totalEth / $scope.tokenPrice);
	};
	$scope.getPrice();
}]);