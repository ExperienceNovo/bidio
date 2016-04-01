angular.module( 'bidio.contests', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contests', {
		url: '/contests',
		views: {
			"main": {
				controller: 'ContestsCtrl',
				templateUrl: 'contests/index.tpl.html'
			}
		},
		resolve: {
			contests: function(ContestModel){
				return ContestModel.getAll();
			}
		}
	});
})

.controller( 'ContestsCtrl', function ContestsCtrl( $scope, config, titleService, ContestModel, contests, $sailsSocket) {
	titleService.setTitle('contests - bidio');
	$scope.currentUser = config.currentUser;
	$scope.contests = contests;

	$scope.createContest = function(newContest){
		newContest.user = $scope.currentUser.id;
		console.log(newContest);
		ContestModel.create(newContest);
	}
	
	$sailsSocket.subscribe('contest', function(envelope){
		switch(envelope.verb){
			case 'created':
				$scope.contests.unshift(envelope.data);
				break;
			case 'updated':
				var index = $scope.contests.map(function(e){
					return e.id;
				}).indexOf(envelope.data[0].id);
				$scope.contests[index] = envelope.data[0];
				break;
		}
	});
	
	
	
	
	
});