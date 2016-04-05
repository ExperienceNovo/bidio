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

			ContestModel: "ContestModel",
			$stateParams: "$stateParams",
			contest: function(ContestModel, $stateParams){
				return ContestModel.getByUrl($stateParams.path)
				.catch(function(err){
					console.log(err);
				});
			}
		}
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, $sce ) {

	contest.contestContent = $sce.trustAsHtml(contest.contestContent);

	// contest.videos = contest.videos.map(function(video){
	// 	video.urlTitle = $sce.trustAsResourceUrl(video.urlTitle);
	// 	return video;
	// });

	titleService.setTitle('contest - bidio');
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;

	$scope.getUrl = function(urlTitle){

		return "/videos/" + urlTitle;

	}

	$scope.updateContest = function(contest){
		ContestModel.update(contest);
	}

});
