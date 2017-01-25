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
			campaigns: function(CampaignModel, member){
				return CampaignModel.getByMember(member.id);
			},
			videos: function(VideoModel, member){
				return VideoModel.getByMember(member.id);
			},
		}
	});
})

.controller( 'MemberCtrl', function MemberCtrl( $scope, titleService, config, member, campaigns, videos ) {
	$scope.currentUser = config.currentUser;
	$scope.member = member;
	if(typeof($scope.member)=="undefined"){$location.path('/')}
	titleService.setTitle(member.username + ' - bidio');
	$scope.profile = member.profile[0];
	console.log($scope.profile)
	$scope.campaigns = campaigns.filter(function(obj){return obj.published == true});
	$scope.videos = videos;
});
