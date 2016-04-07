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
			},
			//userInformation: function(userInformationModel, member){}
			contests: function(ContestModel, member){
				return ContestModel.getByMember(member.id);
			},
			videos: function(VideoModel, member){
				return VideoModel.getByMember(member.id);
			},
		}
	});
})

.controller( 'MemberCtrl', function MemberCtrl( $scope, member, contests, videos ) {
	$scope.member = member;
	if(typeof($scope.member)=="undefined"){$location.path('/')}
	$scope.contests = contests;
	$scope.videos = videos;

	console.log(contests)

});