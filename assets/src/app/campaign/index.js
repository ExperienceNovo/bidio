angular.module( 'bidio.campaign', [
])

.config(['$stateProvider', function config( $stateProvider ) {
	$stateProvider.state( 'campaign', {
		abstract: true,
		url: '/campaign/:path',
		views: {
			"main": {
				controller: 'CampaignCtrl',
				templateUrl: 'campaign/index.tpl.html'
			}
		},
		resolve: {
			campaign: ['$stateParams', 'CampaignModel', function($stateParams, CampaignModel){
				return CampaignModel.getByUrl($stateParams.path)
			}]
		}
	})
	.state( 'campaign.main', {
		url: "",
		templateUrl: "campaign/templates/main.tpl.html"
	})
	.state( 'campaign.about', {
		url: "/about",
		templateUrl: "campaign/templates/about.tpl.html"
	});
}])

.controller( 'CampaignCtrl', ['$sce', '$scope', '$uibModal', 'config', 'campaign', 'CampaignModel', 'titleService', function CampaignCtrl( $sce, $scope, $uibModal, config, campaign, CampaignModel, titleService ) {
	$scope.campaign = campaign;
  console.log(campaign)
  titleService.setTitle($scope.campaign.title + ' | bidio');
	$scope.currentUser = config.currentUser;

  $scope.campaignContent = $sce.trustAsHtml($scope.campaign.campaignContent);
  console.log($scope.campaignContent)

  $scope.campaign.media = {
      sources: [
          {
              src: $scope.campaign.videoUrl,
              type: 'video/mp4'
          }
      ],
      poster: $scope.campaign.thumbnailUrl
  };

  for (x in $scope.campaign.bids){
      $scope.campaign.bids[x].media = {
          sources: [
              {
                  src: $scope.campaign.bids[x].video.amazonUrl,
                  type: 'video/mp4'
              }
          ],
          poster: $scope.campaign.bids[x].video.thumbnailUrl || 'images/video-overlay.png'
      }
  }


	$scope.updateCampaign = function(campaign){
		CampaignModel.update(campaign);
	}
	$scope.apply = function(){
		$uibModal.open({
			animation: true,
			templateUrl: "campaign/templates/submitModal.tpl.html",
			controller: "submitVideoCtrl",
			resolve: {
				campaign: function(){return campaign}
			}
		});
	}

}])

.controller('submitVideoCtrl', ['$sce', '$scope', '$uibModalInstance', 'BidModel', 'campaign', 'config', 'Upload', 'VideoModel', function ($sce, $scope, $uibModalInstance, BidModel, campaign, config, Upload, VideoModel) {

	$scope.campaign = campaign;

	$scope.currentUser = config.currentUser;
	$scope.video = {campaign: campaign.id};
	$scope.pp = 0;
	$scope.error = null;
	$scope.loading = false;
	$scope.videoLoading = false;
	$scope.finished = false;
	$scope.fileName = null;

	/*new page*/
	$scope.videoLoading2 = false;
  $scope.videoSelecting = false;
  $scope.videos = [];
  $scope.viewing = false;
  $scope.viewingVideo = null;
  $scope.viewLoading = false;
  $scope.selectedVideo = {video: null};

	$scope.clear = function(){
		$scope.fileName = null;
		$scope.video.amazonUrl = null;
	}

	$scope.videoSelectToggle = function(){
      $scope.videoSelecting = !$scope.videoSelecting;
      if (!$scope.videoSelecting){$scope.videoUrl = null;}
  }

  $scope.videoSelect  = function(){

      if ($scope.videos.length){
          $scope.videoSelectToggle();
          return;
      }

      $scope.videoLoading2 = true;
      VideoModel.getMine()
      .then(function(videos){
        $scope.videoLoading2 = false;
        if (!videos.length){
            $scope.error = "You have not uploaded any videos yet"
            return;
        }

        videos.forEach(function(video){
          var activeBids = video.bids.filter(function(bid){return bid.isActive}).map(function(bid){return bid.campaign});
          var newBids = video.bids.filter(function(bid){return bid.isNewEntry}).map(function(bid){return bid.campaign});
          if (activeBids.indexOf($scope.campaign.id) != -1){
            video.disabled = true;
          }
          if (newBids.indexOf($scope.campaign.id) != -1){
            video.disabled = true;
          }

        })  
        $scope.videos = videos;
        $scope.videoSelectToggle();
    })
    .catch(function(err){
        $scope.videoLoading2 = false;
        $scope.error = err.message;
    })

  }

  $scope.view = function(video){
      $scope.viewLoading = true;
      $scope.viewingVideo = video;
      $scope.viewing = true;
  }

  $scope.dismissView = function(){
      $scope.viewLoading = false;
      $scope.viewing = false;
      $scope.viewingVideo = null;
  }

	$scope.upload = function(file){
      $scope.videoLoading = true;
      Upload.upload({
        url: '/api/video/upload',
        method: 'POST',
        data: {video: file}
      })
      .then(function(response){
        $scope.videoLoading = false;
        $scope.fileName = file.name;
        $scope.video.amazonUrl = response.data.amazonUrl;
      },
      null,
      function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        $scope.pp = progressPercentage;
      })
  };

  $scope.submit = function(video){
    if (!video.urlTitle, !video.title, !video.amazonUrl, !video.description){
      $scope.error = "Incomplete entry";
      return;
    }
    $scope.loading = true;
    VideoModel.create(video)
    .then(function(video){
      var toUpdate = {
        video: video.id,
        isNewEntry: true,
        campaign: $scope.campaign.id,
        originCampaign: $scope.campaign.id,
        value: $scope.campaign.price
      };
      if ($scope.campaign.endDate){
        toUpdate.originCampaignExpiry = $scope.campaign.endDate;
      }
      return BidModel.create(toUpdate)
    })
    .then(function(response){
      $scope.loading = false;
      $scope.finished = true;
    })
    .catch(function(response){
      //TODO: more details plz
      $scope.error = "An error occurred";
      $scope.loading = false;
    }) 
  };

  $scope.submitPrev = function(id){
    $scope.prevLoading = true;
    var toUpdate = {
      video: id,
      isNewEntry: true,
      campaign: $scope.campaign.id,
      originCampaign: $scope.campaign.id,
      value: $scope.campaign.price
    };
    if ($scope.campaign.endDate){
      toUpdate.originCampaignExpiry = $scope.campaign.endDate;
    }
    return BidModel.create(toUpdate)
    .then(function(){
      $scope.prevLoading = false;
      $scope.finished = true;

    })
    .catch(function(err){ 
      //TODO: more details plz
      console.log(err);
      $scope.error = "An error occurred";
      $scope.loading = false;
    })
  }
	$scope.cancel = function(){
		$uibModalInstance.close();
  };

}]);
