angular.module( 'bidio.contest', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contest', {
		url: '/contest/:path',
		views: {
			"main": {
				controller: 'ContestCtrl',
				templateUrl: 'contest/index.tpl.html'
			}
		},
		resolve: {
			contest: function(ContestModel, $stateParams){
				return ContestModel.getByUrl($stateParams.path);
			},
			videos: function(){
				return [1,2,3,4,5];
			}
		}
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, videos) {
	titleService.setTitle('contest - bidio');
	
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;
	$scope.videos = videos;
	console.log($scope.contest);
	
	$scope.updateContest = function(contest){
		//$scope.contest = newContest;
		ContestModel.update(contest);
	}
	
	 
	
	
	
	
	
	
	
	
});