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
			post: function(){
				return null;
			}
		}
	});
})

.controller( 'BlogPostCtrl', function BlogPostCtrl( $scope, config, titleService, $sce, post ) {
	titleService.setTitle('Blog - bidio');
	console.log('OKOKOKOOK')
});
