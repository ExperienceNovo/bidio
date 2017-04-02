angular.module( 'bidio.creators', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'creators', {
		url: '/creators',
		views: {
			"main": {
				controller: 'CreatorsCtrl',
				templateUrl: 'creators/index.tpl.html'
			}
		}
	});
}])

.controller( 'CreatorsCtrl', ['$scope', 'titleService', function CreatorsController( $scope, titleService ) {
	titleService.setTitle('Creators - bidio');
}]);