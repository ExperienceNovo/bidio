angular.module( 'bidio.blogPost', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'blogPost', {
		url: '/blog/:path',
		views: {
			"main": {
				controller: 'BlogPostCtrl',
				templateUrl: 'blogPost/index.tpl.html'
			}
		},
		resolve:{
			post: function(PostModel, $stateParams){
				return PostModel.getByUrl($stateParams.path);
			}
		}
	});
})

.controller( 'BlogPostCtrl', function BlogPostCtrl( $scope, config, titleService, $sce, post ) {
	$scope.post = post;
	titleService.setTitle($scope.post.title);
});
