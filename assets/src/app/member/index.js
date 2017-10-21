angular.module( 'bidio.member', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'member', {
		url: '/member/:path',
		views: {
			"main": {
				controller: 'MemberCtrl',
				templateUrl: 'member/index.tpl.html'
			}
		},
		resolve: {
			member: ['$stateParams', 'UserModel', function($stateParams, UserModel){
				return UserModel.getByUsername($stateParams.path);
			}],
			campaigns: ['CampaignModel', 'member', function(CampaignModel, member){
				return CampaignModel.getByMember(member.id);
			}],
			videos: ['member', 'VideoModel', function(member, VideoModel){
				return VideoModel.getByMember(member.id);
			}],
			broadcast: ['member', 'ViewModel', function(member, ViewModel){
				return ViewModel.pendingTransactions();
			}],
		}
	});
}])

.controller( 'MemberCtrl', ['$rootScope', '$sailsSocket', '$scope', 'campaigns', 'config', 'member', 'titleService', 'UserModel', 'videos', function MemberCtrl( $rootScope, $sailsSocket, $scope, campaigns, config, member, titleService, UserModel, videos ) {
	$scope.currentUser = config.currentUser;
	$scope.member = member;
	if(typeof($scope.member)=="undefined"){$location.path('/')}
	titleService.setTitle(member.username + ' - bidio');
	$scope.profile = member.profile[0];
	$scope.campaigns = campaigns.filter(function(obj){return obj.published == true});
	$scope.videos = videos;
    UserModel.getBalance($scope.member.walletAddress).then(function(model){
        $scope.balance = model;
    });
	for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
    	}
    }

    $scope.pendingTransactions = [];
    $scope.pendingTransactionsList = [];
    //COULD HAVE web3 on the front end ----....
	$sailsSocket.subscribe('pendingTransactions', function (envelope) {
		//console.log(envelope);
		$scope.pendingTransactions = envelope;
		$scope.pendingTransactionsList.push(envelope);
		if ($scope.pendingTransactionsList.length >= 100){
			$scope.pendingTransactionsList.shift();
		}
	});

	//FONTEND WEB3!
	var filter = $rootScope.cre8web3.eth.filter('pending');
	//{address: $scope.member.walletAddress}
    //{address:'0x818c3e3a61a5c2071841df187318e5be2c238201'}
    filter.watch(function(error, result){
        console.log(result, error);
    });


}]);
