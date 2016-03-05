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

.controller( 'UploadCtrl', function UploadCtrl( $scope, config, titleService, VideoModel ) {
	titleService.setTitle('upload - bidio');
	
	$scope.currentUser = config.currentUser;
	
	
	$scope.createVideo = function(newVideo){
		console.log(newVideo);
		newVideo.user = $scope.currentUser.id;
		
		VideoModel.create(newVideo);
	}
});