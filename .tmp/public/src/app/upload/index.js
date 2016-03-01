angular.module( 'bidio.upload', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'upload', {
		url: '/upload',
		views: {
			"main": {
				controller: 'UploadCtrl',
				templateUrl: 'upload/index.tpl.html'
			}
		}
	});
})

.controller( 'UploadCtrl', function UploadCtrl( $scope, titleService ) {
	titleService.setTitle('upload - bidio');
});