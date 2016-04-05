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
		},
		resolve: {
			trendingVideos: function(VideoModel){
				return VideoModel.getAll();
			},
			contests: function(ContestModel){
				return ContestModel.getAll();
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, trendingVideos, contests ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	$scope.contests = contests;

});
