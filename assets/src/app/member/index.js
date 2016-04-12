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
			bids: function(BidModel, member){
				return BidModel.getByMember(member.id);
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

.controller( 'MemberCtrl', function MemberCtrl( $scope, member, bids, campaigns, videos ) {
	$scope.member = member;
	if(typeof($scope.member)=="undefined"){$location.path('/')}
	$scope.bids = bids;
	$scope.campaigns = campaigns;
	$scope.videos = videos;
});