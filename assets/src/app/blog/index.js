angular.module( 'bidio.blog', [
])

.config(['$stateProvider', function config( $stateProvider ) {
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
}])

.controller( 'BlogCtrl', ['$sce', '$scope', 'config', 'posts', 'titleService', function DiscoverCtrl( $sce, $scope, config, posts, titleService ) {
	titleService.setTitle('bidio - blog');
	$scope.posts = posts;
	$scope.renderHtml = function (htmlCode) {
	    return $sce.trustAsHtml(htmlCode);
	};
}]);
