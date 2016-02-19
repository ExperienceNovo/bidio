angular.module( 'bidio.video', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'video', {
		url: '/video/:id',
		views: {
			"main": {
				controller: 'VideoCtrl',
				templateUrl: 'video/index.tpl.html'
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService ) {
	titleService.setTitle('video - bidio');
});