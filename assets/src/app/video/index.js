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
		resolve: {
			video: function(VideoModel, $stateParams){
				//return VideoModel.getOne($stateParams.id);
				return {
					id: 1,
					title: "Michael's soccer tryout",
					urlTitle: "michaels-soccer-tryout",
					amazonUrl: "/videos/" + "michaels-soccer-tryout",
					description: "Checkout my vid",
					user: {
						id: 2,
						username: "Michael",
						profile: {
							picture: "/images/silhouette_orange.jpg"
						}
					},
					contest: {
						title: "<img class='sponsorPic' src='/images/zaxbys2.png'/> Sponsors Railhawks Tryouts",
						urlTitle: "zaxbys-railhawks",
						prompt: "Buy tickets to support future champions"
					}
				}
			},
			bids: function(video){
				return video;
			}
		}
	});
})

.controller( 'VideoCtrl', function VideoCtrl( $scope, titleService, video, $location, $sce, bids ) {

	if (video.contest){
		video.contest.title = $sce.trustAsHtml(video.contest.title)
	}

	$scope.video = video;
	if(typeof($scope.video)=="undefined"){$location.path('/')}
	$scope.bids = bids;
	titleService.setTitle(video.title + ' - bidio');

	$scope.viewCount = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
	$scope.bidPerView = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

	console.log(video);

	$scope.createBid = function(){

	};

});