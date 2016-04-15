angular.module( 'bidio.video', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'video', {
		url: '/video/:id',
		views: {
			"main": {
				controller: 'VideoCtrl',
				templateUrl: 'video/index.tpl.html'
			}
			
		},
		onExit: function($state, video, VideoModel){

			if(video.campaign && video.campaign.doesRedirect){
				return window.open(
					video.campaign.redirectUrl,
					"_blank"
				)
			}

			$state.transition.then(function(toState){
				video.clicked = true;
				return VideoModel.update(video);
			});

		},
		resolve: {
			video: function(VideoModel, $stateParams){
				return VideoModel.getOne($stateParams.id);
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, lodash, config, titleService, $sailsSocket, video, $location, $uibModal ) {

	$scope.currentUser = config.currentUser;

	$scope.video = video;

	if(typeof($scope.video)=="undefined"){$location.path('/')}

	var activeBid = video.bids.filter(function(bid){ return bid.isActive });

	$scope.highestBid = activeBid.length ? activeBid[0] : {value: "0.01"};

	titleService.setTitle(video.title + ' - bidio');

	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

	$sailsSocket.subscribe('bid', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.video.bids.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.video.bids, {id: envelope.id});
                break;
        }
    });

	$scope.bid = function(){
		$uibModal.open({
			animation: true,
			templateUrl: "video/templates/bid.tpl.html",
			controller: "BidCtrl",
			resolve: {
				video: function(){
					return video
				},
				campaigns: function(CampaignModel){
					return CampaignModel.getMine();
				},
				highestBid: function(){
					return $scope.highestBid;
				}
			}
		});
	}

})

.controller('BidCtrl', function ($scope, highestBid, video, config, campaigns, BidModel, $uibModalInstance ) {

	//console.log(campaigns, video);

	$scope.campaigns = campaigns;

	$scope.video = video;

	$scope.highestBid = highestBid;

	var startingValue = 

	$scope.bid = {
		value: String(parseFloat(highestBid.value) + 0.05),
		video: video.id,
		user: config.currentUser.id,
		isAccepted: true,
		isActive: true
	}

	$scope.createBid = function(bid){
		BidModel.create(bid)
			.then(function(result){
				console.log(result);
				$uibModalInstance.dismiss(result.data)
			})
	}
	
})