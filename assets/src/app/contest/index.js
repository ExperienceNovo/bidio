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
			// videos: function(){
			// 	return ContestModel.getSubmittedVideos($stateParams.path);
			// },
			contestById: function(ContestModel, $stateParams){
				return ContestModel.getOne($stateParams.path);
			}
		}
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, contestById) {
	titleService.setTitle('contest - bidio');
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;
	$scope.videos = contest.submittedVideos;

	console.log(contest.user)
	console.log($scope.contest)
	console.log($scope.videos)

	$scope.updateContest = function(contest){
		ContestModel.update(contest);
	}

});
