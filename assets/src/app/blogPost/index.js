angular.module( 'bidio.blogPost', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'blogPost', {
		url: '/blog/:id',
		views: {
			"main": {
				controller: 'BlogPostCtrl',
				templateUrl: 'BlogPost/index.tpl.html'
			}
		},
		resolve:{
			post: function(){
				return null;
			}
		}
	});
})

.controller( 'BlogPostCtrl', function DiscoverCtrl( $scope, config, titleService, $sce, post ) {
	titleService.setTitle('Blog - bidio');
});
