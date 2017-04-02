angular.module( 'bidio.blogPost', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'blogPost', {
		url: '/blog/:path',
		views: {
			"main": {
				controller: 'BlogPostCtrl',
				templateUrl: 'blogPost/index.tpl.html'
			}
		},
		resolve:{
			post: ['$stateParams', 'PostModel', function($stateParams, PostModel){
				return PostModel.getByUrl($stateParams.path);
			}]
		}
	});
}])

.controller( 'BlogPostCtrl', ['$sce', '$scope', 'config', 'post', 'titleService', function BlogPostCtrl( $sce, $scope, config, post, titleService ) {
	$scope.post = post;
	titleService.setTitle('bidio - '+$scope.post.title);
	$scope.renderHtml = function (htmlCode) {
	    return $sce.trustAsHtml(htmlCode);
	};
}]);
