angular.module( 'bidio.campaigns', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'campaigns', {
		url: '/campaigns',
		views: {
			"main": {
				controller: 'CampaignsCtrl',
				templateUrl: 'campaigns/index.tpl.html'
			}
		},
		resolve: {
			campaigns: function(CampaignModel){
				return CampaignModel.getAll();
			}
		}
	});
})

.controller( 'CampaignsCtrl', function CampaignsCtrl( $scope, config, titleService, CampaignModel, campaigns, $sailsSocket, $sce) {
	titleService.setTitle('campaigns - bidio');
	$scope.currentUser = config.currentUser;
	$scope.campaigns = campaigns.map(function(campaign){
		campaign.title = $sce.trustAsHtml(campaign.title);
		return campaign;
	});

	$scope.createCampaign = function(newCampaign){
		newCampaign.user = $scope.currentUser.id;
		console.log(newCampaign);
		CampaignModel.create(newCampaign);
	}
	
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
	
	
	
	
	
});