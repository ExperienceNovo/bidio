angular.module( 'bidio.contest', [
	'ui.bootstrap',
	'ngAnimate'
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contest', {
		abstract: true,
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
	})
	.state( 'contest.main', {
		url: "",
		templateUrl: "contest/templates/main.tpl.html"
	})
	.state( 'contest.about', {
		url: "/about",
		templateUrl: "contest/templates/about.tpl.html"
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, $sce ) {

	contest.contestContent = $sce.trustAsHtml(contest.contestContent);
	contest.title = $sce.trustAsHtml(contest.title);

	titleService.setTitle('contest - bidio');
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;

	$scope.updateContest = function(contest){
		ContestModel.update(contest);
	}

	$scope.apply = function(){
		if ($scope.currentUser){
			console.log("hi");
		}
		else{
			
		}
	}

});
