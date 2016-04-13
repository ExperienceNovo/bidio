angular.module( 'bidio.dashboard', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
        abstract: true,
        url: '/dashboard',
        views: {
            "main": {
                controller: 'DashboardCtrl',
                templateUrl: 'dashboard/index.tpl.html'
            }
        }
    })
    .state( 'dashboard.home', {
        url: '',
        controller: 'DashboardHomeCtrl',
        templateUrl: 'dashboard/templates/home.tpl.html'
    })
    .state( 'dashboard.analytics', {
        url: '/analytics',
        controller: 'DashboardAnalyticsCtrl',
        templateUrl: 'dashboard/templates/analytics.tpl.html'
    })
    .state( 'dashboard.videos', {
        url: '/videos',
        controller: 'DashboardVideosCtrl',
        templateUrl: 'dashboard/templates/videos.tpl.html',
        resolve: {
            VideoModel: 'VideoModel',
            videos: function(VideoModel){
                return VideoModel.getMine();
            }
        }
    })
    .state( 'dashboard.profile', {
        url: '/profile',
        controller: 'DashboardProfileCtrl',
        templateUrl: 'dashboard/templates/profile.tpl.html',
        resolve: {
            UserModel: 'UserModel',
            user: function(UserModel){
                return UserModel.getMine();
            }
        }
    })
    .state( 'dashboard.campaigns', {
        url: '/campaigns',
        controller: 'DashboardCampaignsCtrl',
        templateUrl: 'dashboard/templates/campaigns.tpl.html',
        resolve: {
            CampaignModel: "CampaignModel",
            campaigns: function(CampaignModel){
                return CampaignModel.getMine();
            }
        }
    })
    .state( 'dashboard.campaignEdit', {
        url: '/campaign/:id',
        controller: 'DashboardCampaignEditCtrl',
        templateUrl: 'dashboard/templates/campaignEdit.tpl.html',
        resolve: {
            CampaignModel: "CampaignModel",
            config: "config",
            campaign: function(config, $stateParams, CampaignModel){

                return CampaignModel.getOne($stateParams.id);
            }
        }
    })
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope, $location, config ) {

    if (!config.currentUser){
        $location.path("/login")
    }
})

.controller( 'DashboardHomeCtrl', function DashboardHomeCtrl( $scope, titleService, lodash, config ) {
    titleService.setTitle('dashboard');
    $scope.currentUser = config.currentUser;
})

.controller( 'DashboardAnalyticsCtrl', function DashboardAnalyticsCtrl( $scope, titleService, config ) {
	titleService.setTitle('analytics');
    $scope.currentUser = config.currentUser;
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
})

.controller( 'DashboardVideosCtrl', function DashboardVideosCtrl( $scope, titleService, videos, VideoModel, $mdDialog ) {
    titleService.setTitle('videos');

    $scope.videos = videos;

    $scope.addVideo = function(ev){
        $mdDialog.show({
          controller: 'VideoDialogCtrl',
          templateUrl: 'dashboard/templates/createVideo.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(function(result){
            $scope.videos.push(result);
        })
    }
})

.controller('VideoDialogCtrl', function DialogCtrl($scope, $mdDialog, Upload, VideoModel) {
    $scope.video = {};
    $scope.loading = $scope.videoLoading = false;
    $scope.error = null;
    $scope.pp = 0;
    $scope.fileName = null;

    $scope.upload = function(file){

        $scope.videoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){
            $scope.fileName = file.name;
            $scope.videoLoading = false;
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
        .then(function(response){
            console.log(response);
            $scope.loading = false;
            $mdDialog.hide(response);
        })
        .catch(function(response){
            //TODO: more details plz
            $scope.error = "An error occurred";
            $scope.loading = false;
        })
    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }

    $scope.clear = function(){
        $scope.fileName = null;
        $scope.video.amazonUrl = null;
    }
})

.controller('DashboardProfileCtrl', function ($scope, user) {

    $scope.profile = user.profile[0];
    $scope.profile.description = "Lorem ipsum stuff goes here Lorem ipsum stuff goes here Lorem ipsum stuff goes her Lorem ipsum stuff goes heeLoem ipsumstuff goes ere Lorem ipu stuff goes hee Lorem ipsu stuff goes hereLorem ipu tuf goes hee Lorem ipsum stuff goes here Loem ipsum stuff goesere Lorem ipsm stuff goes here";
    $scope.profile.firstName = "Stevens";
    $scope.profile.lastName = "Stevens";
    $scope.profile.companyName = "Compnay";
    $scope.profile.companyUrl = "http://google.com/";

})

.controller('DashboardCampaignsCtrl', function (config, $state, $scope, campaigns, CampaignModel, $mdDialog) {

    $scope.campaigns = campaigns;

    $scope.addCampaign = function(ev){
        $mdDialog.show({
          controller: 'CampaignDialogCtrl',
          templateUrl: 'dashboard/templates/createCampaign.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(function(result){

            result.id = "create";

            return CampaignModel.create({
                /*placeholder here*/
                bannerUrl: "http://placehold.it/1000x400?name=banner",
                /*placeholder here*/
                videoUrl: "/videos/blah",
                published: false,
                title: result.title,
                price: "0.10",
                user: config.currentUser.id,
                urlTitle: result.urlTitle,
                prompt: "Write and exciting prompt here",
                intro: "Write an exiciting intro here",
                campaignContent: "Write exciting content here"
            });

        }).then(function(model){
            $state.go("dashboard.campaignEdit", {id: model.id});
        });
    }
})

.controller('DashboardCampaignEditCtrl', function ($state, $mdMenu, $scope, campaign, CampaignModel, $mdDialog, VideoModel, lodash, $q) {

    var originals = lodash.cloneDeep(campaign.videos);

    $scope.campaign = campaign;
    $scope.selection = {type: "new"};
    $scope.clean = true;
    $scope.saving = false;
    $scope.editingLanding = false;
    $scope.editingInfo = false;
    $scope.editingPrompt = false;
    $scope.contentHolder = null;
    $scope.infoHolder = null;
    $scope.promptHolder = null;
    $scope.urlSaving = null;
    $scope.refreshing = false;

    var sorted = {
        "new": $scope.campaign.videos.filter(function(video){return video.isNew}),
        "approved": $scope.campaign.videos.filter(function(video){return !video.isNew && video.approved}),
        "unapproved": $scope.campaign.videos.filter(function(video){return !video.isNew && !video.approved})
    };

    $scope.totalClicks = $scope.campaign.videos.reduce(function(val,item){
        val += item.clickCount;
        return val;
    },0);

    $scope.totalViews = $scope.campaign.videos.reduce(function(val,item){
        val += item.viewCount;
        return val;
    },0);

    $scope.topViews = $scope.campaign.videos.sort(function(a,b){
        if (a.viewCount < b.viewCount){
            return 1
        }

        if (a.viewCount == b.viewCount){
            return 0;
        }

        if (a.viewCount > b.viewCount){
            return -1
        }
    })[0];

    $scope.topClicks = $scope.campaign.videos.sort(function(a,b){
        if (a.clickCount < b.clickCount){
            return 1
        }

        if (a.clickCount == b.clickCount){
            return 0;
        }

        if (a.clickCount > b.clickCount){
            return -1
        }
    })[0];

    $scope.topConversion = $scope.campaign.videos.sort(function(a,b){
        if ((a.clickCount / a.viewCount) < (b.clickCount / b.viewCount)){
            return 1;
        }

        if ((a.clickCount / a.viewCount) == (b.clickCount / b.viewCount)){
            return 0;
        }

        if ((a.clickCount / a.viewCount) > (b.clickCount / b.viewCount)){
            return -1;
        }
    })[0];

    $scope.refresh = function(){

        $scope.refreshing = true;

        CampaignModel.getOne($scope.campaign.id)
            .then(function(campaign){

                $scope.refreshing = false;
                $scope.campaign.videos = campaign.videos;

                sorted = {
                    "new": $scope.campaign.videos.filter(function(video){return video.isNew}),
                    "approved": $scope.campaign.videos.filter(function(video){return !video.isNew && video.approved}),
                    "unapproved": $scope.campaign.videos.filter(function(video){return !video.isNew && !video.approved})
                };

                $scope.selectedVideos = sorted[$scope.selection.type];

            })
            .catch(function(error){
                $scope.refreshing = false;
                console.log(error)
            })
    }

    $scope.submitUrl = function(){
        $scope.urlSaving = true;
        campaignSave().then(function(){
            $scope.urlSaving = false;
        });
    }

    $scope.publish = function(){
        //check canPublish first
        $scope.campaign.published = true;
        campaignSave()
            .then(function(result){
                $state.go("dashboard.campaigns")
            })
    }

    $scope.canPublish = function(){
        //TODO: return true or false based on criteria for publishing being met
        return false;
    }

    $scope.getImage = function(ev){

        $mdDialog.show({
            controller: 'AddPhotoCtrl',
            templateUrl: 'dashboard/templates/addPhoto.tpl.html',
            parent: angular.element(document.body),
            resolve: {
                campaign: function(){
                    return campaign;
                }
            },
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        })

    }

    $scope.getVideo = function(ev){

        $mdDialog.show({
            controller: 'AddVideoCtrl',
            templateUrl: 'dashboard/templates/addVideo.tpl.html',
            parent: angular.element(document.body),
            resolve: {
                campaign: function(){
                    return campaign;
                }
            },
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        })

    }

    $scope.editInfoToggle = function(){
        $scope.infoHolder = lodash.clone($scope.campaign.campaignContent);
        $scope.editingInfo = !$scope.editingInfo;
    }

    $scope.editLandingToggle = function(){
        $scope.contentHolder = lodash.clone($scope.campaign.campaignContent);
        $scope.editingLanding = !$scope.editingLanding;
    }

    $scope.editPromptToggle = function(){
        $scope.promptHolder = lodash.clone($scope.campaign.prompt);
        $scope.editingPrompt = !$scope.editingPrompt;
    }

    $scope.view = function(ev, video){

        var before = video.approved;

        function after(){
            if (video.approved != before){
                $scope.clean = false;
                video.dirty = true;
            }
        }

        $mdDialog.show({
          controller: 'ViewDialogCtrl',
          templateUrl: 'dashboard/templates/viewModal.tpl.html',
          parent: angular.element(document.body),
          resolve: {
            video: function(){
                return video;
            }
          },
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(after, after, null);

    }

    function campaignSave(){
        $scope.saving = true;

        var toUpdate = {
            id: $scope.campaign.id,
            doesRedirect: $scope.campaign.doesRedirect,
            bannerUrl: $scope.campaign.bannerUrl,
            videoUrl: $scope.campaign.videoUrl,
            published: $scope.campaign.published,
            title: $scope.campaign.title,
            price: $scope.campaign.price,
            user: $scope.campaign.user.id,
            urlTitle: $scope.campaign.urlTitle,
            prompt: $scope.campaign.prompt,
            intro: $scope.campaign.intro,
            campaignContent: $scope.campaign.campaignContent
        };

        if($scope.campaign.redirectUrl){
            toUpdate.redirectUrl = $scope.campaign.redirectUrl;
        }

        if($scope.campaign.contributionGoal){
            toUpdate.contributionGoal = $scope.campaign.contributionGoal;
        }

        if($scope.campaign.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = $scope.campaign.maxContributionPerVideo;
        }

        return CampaignModel.update(toUpdate)
    }

    $scope.landingSave = function(){

        campaignSave()
            .then(function(campaign){

                $scope.saving = false;
                $scope.editLandingToggle();

            })
            .catch(function(err){

                $scope.saving = false;

            });
    }

    $scope.infoSave = function(){

        campaignSave()
            .then(function(campaign){

                $scope.infoSaving = false;
                $scope.editInfoToggle();

            })
            .catch(function(err){

                $scope.infoSaving = false;

            });
    }

    $scope.promptSave = function(){

        campaignSave()
            .then(function(campaign){

                $scope.promptSaving = false;
                $scope.editPromptToggle();

            })
            .catch(function(err){

                $scope.promptSaving = false;

            });
    }

    $scope.landingUndo = function(){

        $scope.campaign.campaignContent = $scope.contentHolder;
        $scope.editLandingToggle();
    }

    $scope.infoUndo = function(){

        $scope.campaign.info = $scope.infoHolder;
        $scope.editInfoToggle();
    }

    $scope.promptUndo = function(){

        $scope.campaign.prompt = $scope.promptHolder;
        $scope.editPromptToggle();
    }

    $scope.selectedVideos = sorted[$scope.selection.type];

    $scope.$watch(
        "selection.type", 
        function(newVal, oldVal){
            $scope.clean = true;
            $scope.selectedVideos = sorted[newVal]
        },
        true
    );

    $scope.dirty = function(video){
        video.dirty = true;
        video.isNew = false
        $scope.clean = false;
    }

    $scope.save = function(){

        //get all entries that have been modified
        var toSave = $scope.selectedVideos.filter(function(video){
            return video.dirty;
        });

        $scope.saving = true;

        //update all of them
        $q.all(
            toSave.map(function(video){
                return VideoModel.update(video);
            })
        )
        .then(function(){

            //recategorize videos based on changes
            $scope.saving = false;
            sorted = {
                "new": $scope.campaign.videos.filter(function(video){return video.isNew}),
                "approved": $scope.campaign.videos.filter(function(video){return !video.isNew && video.approved}),
                "unapproved": $scope.campaign.videos.filter(function(video){return !video.isNew && !video.approved})
            };
            $scope.selectedVideos = sorted[$scope.selection.type];
        })
        .catch(function(err){
            $scope.saving = false;
            //TODO: handle error logging
        })
    }

    $scope.undo = function(){
        $scope.clean = true;
        $scope.campaign.videos = originals;
        originals = lodash.cloneDeep(campaign.videos);

        sorted = {
            "new": $scope.campaign.videos.filter(function(video){return video.isNew}),
            "approved": $scope.campaign.videos.filter(function(video){return !video.isNew && video.approved}),
            "unapproved": $scope.campaign.videos.filter(function(video){return !video.isNew && !video.approved})
        };

        $scope.selectedVideos = sorted[$scope.selection.type];
    }
})

.controller('AddPhotoCtrl', function ($scope, $mdDialog, Upload, campaign, CampaignModel) {

    $scope.pp = 0;
    $scope.bannerUrl = null;
    $scope.photoLoading = false;
    $scope.error = null;

    $scope.submit = function(){

        campaign.bannerUrl = $scope.bannerUrl;

        var toUpdate = {
            id: campaign.id,
            bannerUrl: campaign.bannerUrl,
            videoUrl: campaign.videoUrl,
            published: campaign.published,
            title: campaign.title,
            price: campaign.price,
            user: campaign.user.id,
            urlTitle: campaign.urlTitle,
            prompt: campaign.prompt,
            intro: campaign.intro,
            campaignContent: campaign.campaignContent
        };

        if(campaign.contributionGoal){
            toUpdate.contributionGoal = campaign.contributionGoal;
        }

        if(campaign.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = campaign.maxContributionPerVideo;
        }

        CampaignModel.update(toUpdate)
            .then(function(){
                $mdDialog.hide();
            })
            .catch(function(err){
                $scope.error = err.message;
            })
    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }

    //TODO: refactor backend so that videos and images are uploaded through separate endpoints (separation of concerns)
    $scope.upload = function(file){

        $scope.photoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){
            $scope.photoLoading = false;
            $scope.bannerUrl = response.data.amazonUrl;
        },
        null,
        function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.pp = progressPercentage;
        })

    };

})

.controller('AddVideoCtrl', function ($scope, $mdDialog, Upload, campaign, CampaignModel, VideoModel) {

    $scope.pp = 0;
    $scope.videoUrl = null;
    $scope.videoLoading = false;
    $scope.videoLoading2 = false;
    $scope.videoSelecting = false;
    $scope.error = null;
    $scope.videos = [];
    $scope.viewing = false;
    $scope.viewingVideo = null;
    $scope.viewLoading = false;

    $scope.submit = function(){

        campaign.videoUrl = $scope.videoUrl;

        var toUpdate = {
            id: campaign.id,
            bannerUrl: campaign.bannerUrl,
            videoUrl: campaign.videoUrl,
            published: campaign.published,
            title: campaign.title,
            price: campaign.price,
            user: campaign.user.id,
            urlTitle: campaign.urlTitle,
            prompt: campaign.prompt,
            intro: campaign.intro,
            campaignContent: campaign.campaignContent
        };

        if(campaign.contributionGoal){
            toUpdate.contributionGoal = campaign.contributionGoal;
        }

        if(campaign.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = campaign.maxContributionPerVideo;
        }

        CampaignModel.update(toUpdate)
            .then(function(){
                $mdDialog.hide();
            })
            .catch(function(err){
                $scope.error = err.message;
            })
    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }

    //TODO: refactor backend so that videos and images are uploaded through separate endpoints (separation of concerns)
    $scope.upload = function(file){

        $scope.videoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){

            $scope.videoLoading = false;
            $scope.videoUrl = response.data.amazonUrl;
        },
        function(err){
            $scope.videoLoading = false;
            console.log(err);
        },
        function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.pp = progressPercentage;
        })

    };

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

})

.controller('ViewDialogCtrl', function DialogCtrl($scope, $mdDialog, video) {

    $scope.video = video;

    $scope.dismiss = function(){

        $mdDialog.hide({approved: $scope.video.approved, id: $scope.video.id});
    }

})

.controller('CampaignDialogCtrl', function DialogCtrl($scope, $mdDialog, Upload, CampaignModel) {
    $scope.campaign = {};
    $scope.error = null;

    $scope.submit = function(campaign){

        if (!campaign.title || !campaign.urlTitle){
            $scope.error = "Title and URL Title required"
        }

        CampaignModel.check(campaign)
            .then(function(){
                $mdDialog.hide(campaign);
            })
            .catch(function(err){
                console.log(err);
                $scope.error = "Title or URL Title is not unique";
            });

    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }
})