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

	for (x in $scope.videos){
    	$scope.videos[x].media = {
    		sources: [
		        {src: $scope.videos[x].amazonUrl, type: "video/mp4"}
    		],
    		poster: $scope.videos[x].thumbnailUrl || '/images/video-overlay.png'
    	}
    }


    //CRYPTO
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

	UserModel.getBalanceBackend($scope.member.walletAddress).then(function(model){
        $scope.balance = model;
        console.log($scope.balance)
    });
    //UserModel.getBalance($scope.member.walletAddress);

    //TODO: FRONTEND REFACTOR: CALI
    //$rootScope.cre8web3.eth.getBalance($scope.member.walletAddress, 'latest', function(error, result){
    //    console.log(result);
    //});


	$scope.multiDemsionalBalance = 0;
	$scope.tokenIdentifer = 'general'
	$scope.newLookup = {};
	$scope.tokenLookup = function(){
		console.log($scope.tokenIdentifier)
		UserModel.getTokenBalance($scope.member.walletAddress, $scope.newLookup.tokenIdentifier).then(function(model){
			console.log(model);
 			$scope.multiDemsionalBalance = model.viewTokenBalance;
 		});
	};

	

	//UserModel.getTokenBalanceFrontend($scope.member.walletAddress, $scope.tokenIdentifer);

	//FONTEND WEB3!
	var filter = $rootScope.cre8web3.eth.filter('pending');
    filter.watch(function(error, result){
        console.log(result, error);
    });
  
    var viewContractEvent = $rootScope.viewContractInstance.CreateViewToken({_to: $scope.member.walletAddress.toString()}, {fromBlock: 0, toBlock: 'latest'});

	viewContractEvent.watch(function(error, result){
		//console.log(result)
	});

	var myResults = viewContractEvent.get(function(error, logs){
    	//console.log(error, logs);
	});


	var newFilter = $rootScope.cre8web3.eth.filter({
		fromBlock: 0,
		toBlock: 'latest',
		address: '0x9b870E0D29D485CB0bd2a076344B4F0bf2Fee009',
		topics: [$rootScope.cre8web3.sha3('CreateOrderEvent(string,uint256,string,string,uint256)')]
	});

	newFilter.watch(function(error, result){
        console.log(result, error);
    });


}]);
