angular.module( 'bidio.contests', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contests', {
		url: '/contests',
		views: {
			"main": {
				controller: 'ContestCtrl',
				templateUrl: 'contests/index.tpl.html'
			}
		}
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, titleService ) {
	titleService.setTitle('contests - bidio');
});