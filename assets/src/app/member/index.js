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

	/*

	UserModel.getTokenBalanceFrontend($scope.member.walletAddress, $scope.tokenIdentifer);

	//FONTEND WEB3!
	var filter = $rootScope.cre8web3.eth.filter('pending');
    filter.watch(function(error, result){
        console.log(result, error);
    });

    //TODO: RESUBMIT VIEWCONTRACT -- CHANGE ADDRESS
    var viewContract = $rootScope.cre8web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
    //var viewContract = $rootScope.cre8web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_id","type":"string"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}]);
    
    //var viewContractInstance = viewContract.at('0x6c728ed572633d08cbea0e7ed7aadbf2f044788f');
    var viewContractInstance = viewContract.at('0x631d76c91b748361283891e559682435823c2909');
    
    console.log(viewContractInstance)
  
    var viewContractEvent = viewContractInstance.CreateViewToken({_to: "0x140BabcC9bc6Fc4Bf33Da05659431Fd1Af187e54"}, {fromBlock: 0, toBlock: 'latest'});

	viewContractEvent.watch(function(error, result){
    	console.log(error, result);
	});

	var myResults = viewContractEvent.get(function(error, logs){
    	console.log(error, logs);
	});

*/



}]);
