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
<<<<<<< HEAD
	console.log('hello world')
=======
	
	console.log("logging some stuff from home");
	
	$scope.myvar = ['thing1', 'thing2', 'thing3', 'thing4'];
>>>>>>> 1e887a9900217cb7f06146ffe078d2aacbc9b77d

});
