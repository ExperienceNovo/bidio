angular.module( 'bidio.sponsors', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'sponsors', {
		url: '/sponsors',
		views: {
			"main": {
				controller: 'SponsorsCtrl',
				templateUrl: 'sponsors/index.tpl.html'
			}
		}
	});
})

.controller( 'SponsorsCtrl', function SponsorsController( $scope, titleService ) {
	titleService.setTitle('Sponsors - bidio');
});