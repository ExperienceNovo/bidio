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
        console.log($scope.balance)
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

	/*var viewContract = new $rootScope.cre8web3.eth.Contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
	viewContract.options.address ='0x13159ad936b157e1e062bd837ed2c0068f4d299a';
	    viewContract.getPastEvents('CreateViewToken', {
		filter: {_to: $scope.member.address.toString()},
	    fromBlock: 0,
	    toBlock: 'latest'
	})
	.then(function(events){
	    console.log(events);
	});*/


}]);
