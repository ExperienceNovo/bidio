angular.module( 'bidio.browse', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'browse', {
		url: '/browse',
		views: {
			"main": {
				controller: 'BrowseCtrl',
				templateUrl: 'browse/index.tpl.html'
			}
		}
	});
})

.controller( 'BrowseCtrl', function BrowseCtrl( $scope, titleService ) {
	titleService.setTitle('Browse - bidio');
});