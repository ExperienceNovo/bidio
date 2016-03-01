angular.module( 'bidio.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = [1,2,3,4,5,6,8];

});
