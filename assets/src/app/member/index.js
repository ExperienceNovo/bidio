angular.module( 'bidio.member', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
			
		},
		resolve: {
			member: function(UserModel, $stateParams){
				return UserModel.getByUsername($stateParams.path);
			}
		}
	});
})

.controller( 'MemberCtrl', function MemberCtrl( $scope, member ) {
	$scope.member = member;
	if(typeof($scope.member)=="undefined"){$location.path('/')}
});