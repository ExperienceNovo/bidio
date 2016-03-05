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
			
		},
		resolve: {
			video: function(VideoModel, $stateParams){
				return VideoModel.getOne($stateParams.id);
			}
		}
		
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video ) {
	titleService.setTitle('video - bidio');
	$scope.video = video;
	
	console.log(video);
	
});