angular.module( 'bidio.blog', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'blog', {
		url: '/blog',
		views: {
			"main": {
				controller: 'BlogCtrl',
				templateUrl: 'blog/index.tpl.html'
			}
		},
		resolve:{
			posts: function(PostModel){
				return PostModel.getAll();
			}
		}
	});
})

.controller( 'BlogCtrl', function DiscoverCtrl( $sce, $scope, config, titleService, $sce, posts ) {
	titleService.setTitle('Blog - bidio');
	$scope.posts = posts;
	$scope.renderHtml = function (htmlCode) {
	    return $sce.trustAsHtml(htmlCode);
	};
});
