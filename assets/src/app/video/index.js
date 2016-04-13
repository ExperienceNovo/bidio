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
			},
			bids: function(BidModel, video){
				return BidModel.getByVideo(video);
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, config, titleService, $sailsSocket, video, $location, $sce, bids, BidModel ) {

	$scope.currentUser = config.currentUser;
	if (video.campaign){
		video.campaign.title = $sce.trustAsHtml(video.campaign.title)
	}
	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	$scope.bids = bids;
	$scope.highestBid = bids[0]
	titleService.setTitle(video.title + ' - bidio');

	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


	$scope.createBid = function(newBid){
		if($scope.currentUser){
			$scope.newBid.user = $scope.currentUser.id;
			$scope.newBid.video = video.id;
			console.log($scope.newBid)
			BidModel.create($scope.newBid);
		}
	};

	$sailsSocket.subscribe('bid', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.bids.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.bids, {id: envelope.id});
                break;
        }
    });

});