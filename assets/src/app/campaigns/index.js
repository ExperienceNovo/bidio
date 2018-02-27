angular.module( 'bidio.campaigns', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'campaigns', {
		url: '/campaigns',
		views: {
			"main": {
				controller: 'CampaignsCtrl',
				templateUrl: 'campaigns/index.tpl.html'
			}
		},
		resolve: {
			campaigns: ['CampaignModel', function(CampaignModel){
				return CampaignModel.getAll();
			}]
		}
	});
}])

.controller( 'CampaignsCtrl', ['$sailsSocket', '$sce', '$scope', 'CampaignModel', 'campaigns', 'config', 'titleService', function CampaignsCtrl( $sailsSocket, $sce, $scope, CampaignModel, campaigns, config, titleService) {
	titleService.setTitle('campaigns | bidio');
	$scope.currentUser = config.currentUser;
	$scope.campaigns = campaigns;
	
	$sailsSocket.subscribe('campaign', function(envelope){
		console.log(envelope)
		switch(envelope.verb){
			case 'created':
				$scope.campaigns.unshift(envelope.data);
				break;
			case 'updated':
				var index = $scope.campaigns.map(function(e){
					return e.id;
				}).indexOf(envelope.data[0].id);
				$scope.campaigns[index] = envelope.data[0];
				break;
		}
	});
	
}]);