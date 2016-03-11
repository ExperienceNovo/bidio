angular.module( 'bidio.dashboard', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/index.tpl.html'
			}
		}
	});
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope, titleService ) {
	titleService.setTitle('dashboard - bidio');
});