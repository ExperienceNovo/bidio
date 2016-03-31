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
				//return contestModel.getAll();
			},
			videos: function(){
				return [1,2,3,4,5];
			},
			contestById: function(ContestModel, $stateParams){
				console.log("the state params are:: "+ $stateParams);
				
				return ContestModel.getById($stateParams.path);
			},
			contests: function(ContestModel){
				return ContestModel.getAll();
			}
		}
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, contests, contestById, videos) {
	titleService.setTitle('contest - bidio');
	
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;
	$scope.videos = videos;
	//console.log($scope.contest);
	
	//console.log(videos);
	
	//console.log(" all contests are :: " + contests );
	for(var i in contests){
		//console.log(contests[i]);
		//console.log(contests[i].user);
		if(contests[i].id == contestById.id){
			//console.log("FOUND IT");
			$scope.contest = contests[i];
		}
		//for(var j in contests[i][user]){
		//	console.log("user for" + i + " is " + contests[i][user][j]);
		//}
		
	}
	
	console.log($scope.contest);
	
	//console.log($scope.contest.user);
	
	$scope.createdBy = $scope.contest.user;
	
	console.log($scope.createdBy);
	
	var d = new Date($scope.contest.createdAt);
	$scope.day = d.getDate();
	$scope.month = d.getMonth();
	$scope.year = d.getFullYear();
	
	
	
	$scope.updateContest = function(contest){
		//$scope.contest = newContest;
		ContestModel.update(contest);
	}
	
	 
	
	
	
	
	
	
	
	
});