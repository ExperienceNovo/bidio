angular.module( 'bidio.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve: {
			trendingVideos: function(VideoModel){
				return VideoModel.getAll();
			},
			featuredCampaigns: function(CampaignModel){
				return CampaignModel.getFeatured();
			},
			featuredVideos: function(CampaignModel){
				return CampaignModel.getFeatured();
			},
			campaign: function(CampaignModel){
				return CampaignModel.getByUrl("railhawks-tryouts");
			},
			videos: function(VideoModel){
				return VideoModel.getAll();
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, trendingVideos, campaign, featuredCampaigns, videos, featuredVideos, $sce ) {
	titleService.setTitle('bidio');
	$scope.videos = videos;
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	//campaign.title = $sce.trustAsHtml(campaign.title)
	$scope.campaign = campaign;
	$scope.featuredCampaigns = featuredCampaigns;
    $scope.toggle = true;

	console.log(campaign);
	$scope.intro = {
        sources: [
            {
                src: 'https://s3.amazonaws.com/bidio8/marketing+images/Bidio_intro_3.20.mov',
                type: 'video/mp4'
            }
        ],
        poster: $scope.campaign.poster
    }	


	$scope.campaign.media = {
        sources: [
            {
                src: $scope.campaign.videoUrl,
                type: 'video/mp4'
            }
        ],
        poster: $scope.campaign.poster
    }	
    $scope.campaign.matt = {
        sources: [
            {
                src: 'https://bidio8.s3.amazonaws.com/2057b5ee-6c67-498e-a6cc-963d26ede0a7.mp4',
                type: 'video/mp4'
            }
        ]    
    }

});
