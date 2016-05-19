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
        templateUrl: 'dashboard/templates/home.tpl.html',
        resolve: {
            featuredCampaigns: function(CampaignModel){
                return CampaignModel.getFeatured();
            }
        }
    })
    .state( 'dashboard.analytics', {
        url: '/analytics',
        controller: 'DashboardAnalyticsCtrl',
        templateUrl: 'dashboard/templates/analytics.tpl.html'
    })
    .state( 'dashboard.video', {
        url: '/video/:id',
        controller: 'DashboardVideoCtrl',
        templateUrl: 'dashboard/templates/video.tpl.html',
        resolve: {
            VideoModel: 'VideoModel',
            video: function(VideoModel, $stateParams){
                return VideoModel.getOne($stateParams.id);
            },
            clicks: function(ClickModel, video){
                return ClickModel.getByVideo(video.id);
            },
            views: function(ViewModel, video){
                return ViewModel.getByVideo(video.id);
            }
        }
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
    .state( 'dashboard.profileMain', {
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
    .state( 'dashboard.profileEdit', {
        url: '/profile/edit',
        controller: 'DashboardProfileCtrl',
        templateUrl: 'dashboard/templates/profileEdit.tpl.html',
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

.controller ('ResponsiveDashNav', function ResponsiveDashNav($scope, $window){

    $scope.updateWidth = function() {
        $scope.width = $window.innerWidth;
    }

    $scope.sideNavHide = function (){
        if ($scope.width <768){
            $scope.sideNav = false;
        }
        else{
            $scope.sideNav = true;
        }
    };
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope, $location, config, localStorageService ) {

    if (!config.currentUser){
        $location.path('/login')
    }

	if (localStorageService.get('redirectTo') === '/dashboard/profile/edit') {
		$location.path('/dashboard/profile/edit');
		localStorageService.remove('redirectTo');
		console.log(localStorageService.get('redirectTo'));
	}

	if (window.location.hash && window.location.hash == '#_=_') {
		console.log('removing hash stuff');
		window.location.hash = '';
		console.log(window.location)
	}

    $scope.changePath = function (path) {
        $location.path('/dashboard' + path);
    };


})

.controller( 'DashboardHomeCtrl', function DashboardHomeCtrl( $scope, titleService, lodash, config, featuredCampaigns ) {
    titleService.setTitle('dashboard');
    $scope.currentUser = config.currentUser;
    $scope.featuredCampaigns = featuredCampaigns;
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

.controller( 'DashboardVideoCtrl', function DashboardVideosCtrl( $scope, titleService, video, views, VideoModel, clicks, $sailsSocket ) {
    titleService.setTitle('video');
    $scope.video = video;
    $scope.views = views;
    $scope.clicks = clicks;

    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    $scope.updateViews = function(){

        $scope.viewLabels = [];
        $scope.viewSeries = [];
        $scope.viewData = [[]];

        if($scope.views){
            $scope.viewSeries = ['Views']
            for (x in $scope.views){
                $scope.viewLabels.push($scope.views[x].createdAt);
                $scope.viewData[0].push(x);
            }
        }
        else{
            $scope.viewLabels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.viewSeries = ['Views', 'Click Throughs'];
            $scope.viewData = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
        }
    };
    $scope.updateViews()

    $scope.updateClicks = function(){

        $scope.clickLabels = [];
        $scope.clickSeries = [];
        $scope.clickData = [[]];

        if($scope.clicks){
            $scope.clickSeries = ['Clicks']
            for (x in $scope.clicks){
                $scope.clickLabels.push($scope.clicks[x].createdAt);
                $scope.clickData[0].push(x);
            }
        }
        else{
            $scope.clickLabels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.clickSeries = ['Clicks', 'Click Throughs'];
            $scope.clickData = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
        }
    };
    $scope.updateClicks()


    $sailsSocket.subscribe('view', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if (envelope.data.video == $scope.video.id){
                    $scope.views.unshift(envelope.data);
                    $scope.updateViews();
                    break;
                }
                else{break;}
        }
    });

    $sailsSocket.subscribe('click', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                if (envelope.data.video == $scope.video.id){
                    $scope.clicks.unshift(envelope.data);
                    $scope.updateClicks();
                    break;
                }
                else{break;}
        }
    });

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

        if ($scope.setMinimum){
            video.minimumPrice = $scope.minimumPrice;
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
            console.log(response);
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

.controller('DashboardProfileCtrl', function ($state, $scope, user, ProfileModel, UserModel, $mdDialog, $location, localStorageService) {

    $scope.username = user.username;
    $scope.submitLoading = false;
    $scope.profile = user.profile[0];
		$scope.passports = user.passports;
		$scope.user = user;

    $scope.submit = function(profile){

        $scope.submitLoading = true;

        var toUpdate = {id: profile.id};

        if (profile.picture){
            toUpdate.picture = profile.picture;
        }

        if (profile.firstName){
            toUpdate.firstName = profile.firstName;
        }

        if (profile.lastName){
            toUpdate.lastName = profile.lastName;
        }

        if (profile.description){
            toUpdate.description = profile.description;
        }

        if (profile.companyName){
            toUpdate.companyName = profile.companyName;
        }

        if (profile.companyUrl){
            toUpdate.companyUrl = profile.companyUrl;
        }

        if (profile.isSponsor){
            toUpdate.isSponsor = profile.isSponsor;
        }

        if (profile.isTrusted){
            toUpdate.isTrusted = profile.isTrusted;
        }

        if (profile.user){
            toUpdate.user = profile.user;
        }

        ProfileModel.update(toUpdate)
            .then(function(){
                $scope.submitLoading = false;
                $state.go('dashboard.profileMain')
            })
            .catch(function(err){
                console.log(err);
                $scope.submitLoading = false;
            })
    }

    $scope.addProfilePic = function(ev){

        $mdDialog.show({
          controller: 'ProfilePicCtrl',
          templateUrl: 'dashboard/templates/addProfilePic.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(function(result){
            $scope.profile.picture = result;
        })
    }

	$scope.passportRegistered = function(provider) {
		for (i in $scope.passports) {
				if ($scope.passports[i].provider === provider)
						return true;
		}
		return false;
	}

	$scope.removePassport = function(provider) {
		UserModel.removePassport(provider)
			.then(function(result) {
				console.log(result)
				$scope.passports = $scope.passports.filter(function(val, ind, arr) {
					return !(arr[ind].identifier === result[0].identifier);
				})

				user.socialAccounts[(result[0].provider).toString()] = {}
				UserModel.update(user)

			})
	}

	$scope.go = function(path) {
			localStorageService.set('redirectTo', $location.path());
			console.log(localStorageService.get('redirectTo'))
	  	$location.path(path);
	};

})

.controller('ProfilePicCtrl', function ($scope, Upload, $mdDialog) {

    $scope.photoLoading = false;
    $scope.pp = 0;
    $scope.profilePicUrl = null;

    //TODO: refactor backend so that videos and images are uploaded through separate endpoints (separation of concerns)
    $scope.upload = function(file){

        $scope.photoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){

            $scope.videoLoading = false;
            $scope.profilePicUrl = response.data.amazonUrl;
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

    $scope.submit = function(){
        $mdDialog.hide($scope.profilePicUrl);
    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }

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

.controller('DashboardCampaignEditCtrl', function ($state, $mdMenu, $scope, campaign, CampaignModel, $mdDialog, VideoModel, lodash, $q, BidModel) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };

    var originals = lodash.cloneDeep(campaign.bids);

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
    $scope.endDate = new Date();
    $scope.max = 3;
    $scope.selectedIndex = 0;
    $scope.nextTab = function() {
        var index = ($scope.selectedIndex == $scope.max) ? 0 : $scope.selectedIndex + 1;
        $scope.selectedIndex = index;
    };

    function sort(bid){

        if (bid.isNewEntry){
            return "new";
        }

        if (!bid.isActive){
            return "old";
        }

        if(!bid.isAccepted){
            return "unapproved";
        }

        return "approved"
    }

    var sorted = $scope.campaign.bids.reduce(function(value,bid){

        value[sort(bid)].push(bid);
                return value;

    }, {"new": [],
        "old": [],
        "approved": [],
        "unapproved": []
    });

    $scope.totalClicks = $scope.campaign.bids.reduce(function(val,item){
        val += item.video.clickCount;
        return val;
    },0);

    $scope.totalViews = $scope.campaign.bids.reduce(function(val,item){
        val += item.video.viewCount;
        return val;
    },0);

    $scope.topViews = $scope.campaign.bids.sort(function(a,b){
        if (a.video.viewCount < b.video.viewCount){
            return 1
        }

        if (a.video.viewCount == b.video.viewCount){
            return 0;
        }

        if (a.video.viewCount > b.video.viewCount){
            return -1
        }
    })[0];

    $scope.topClicks = $scope.campaign.bids.sort(function(a,b){
        if (a.video.clickCount < b.video.clickCount){
            return 1
        }

        if (a.video.clickCount == b.video.clickCount){
            return 0;
        }

        if (a.video.clickCount > b.video.clickCount){
            return -1
        }
    })[0];

    $scope.topConversion = $scope.campaign.bids.sort(function(a,b){
        if ((a.video.clickCount / a.video.viewCount) < (b.video.clickCount / b.video.viewCount)){
            return 1;
        }

        if ((a.video.clickCount / a.video.viewCount) == (b.video.clickCount / b.video.viewCount)){
            return 0;
        }

        if ((a.video.clickCount / a.video.viewCount) > (b.video.clickCount / b.video.viewCount)){
            return -1;
        }
    })[0];

    var bidWatches = $scope.campaign.bids.map(function(bid){

        return $scope.$watch(function($scope){
            return bid;
        }, function(newVal, oldVal){

            if (newVal.isAccepted == oldVal.isAccepted){
                return;
            }

            if (oldVal.isNewEntry){
                newVal.isNewEntry = false;
                newVal.isActive = true;
            }

        },true);

    });

    $scope.refresh = function(){

        $scope.refreshing = true;

        CampaignModel.getOne($scope.campaign.id)
            .then(function(campaign){
                $scope.refreshing = false;
                $scope.campaign.bids = campaign.bids;

                //stop watching old ones
                bidWatches.forEach(function(bidWatch){bidWatch()});
                bidWatches = $scope.campaign.bids.map(function(bid){

                    return $scope.$watch(function($scope){
                        return bid;
                    }, function(newVal, oldVal){

                        if (newVal.isAccepted == oldVal.isAccepted){
                            return;
                        }

                        if (oldVal.isNewEntry){
                            newVal.isNewEntry = false;
                            newVal.isActive = true;
                        }

                    },true);

                });

                sorted = $scope.campaign.bids.reduce(function(value,bid){

                    value[sort(bid)].push(bid);
                    return value;

                }, {"new": [],
                    "old": [],
                    "approved": [],
                    "unapproved": []
                });

                originals = lodash.cloneDeep($scope.campaign.bids);

                $scope.selectedBids = sorted[$scope.selection.type];

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

    $scope.view = function(ev, bid){

        var before = bid.isApproved;

        function after(){
            if (bid.isApproved != before){
                $scope.clean = false;
                bid.dirty = true;
            }
        }

        $mdDialog.show({
          controller: 'ViewDialogCtrl',
          templateUrl: 'dashboard/templates/viewModal.tpl.html',
          parent: angular.element(document.body),
          resolve: {
            bid: function(){
                return bid;
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

    $scope.selectedBids = sorted[$scope.selection.type];

    $scope.$watch(
        "selection.type",
        function(newVal, oldVal){
            $scope.clean = true;
            $scope.selectedBids = sorted[newVal]
        },
        true
    );

    $scope.dirty = function(bid){
        bid.dirty = true;
        $scope.clean = false;
    }

    $scope.saveVideo = function(){

        //get all entries that have been modified
        var toSave = $scope.selectedBids.filter(function(bid){

            return bid.dirty;

        })
        .map(function(bid){

            var model = {
                id: bid.id,
                value: bid.value,
                video: bid.video.id,
                campaign: bid.campaign
            };

            if (bid.user){
                model.user = bid.user.id;
            }

            if (bid.viewCount){
                model.viewCount = bid.viewCount;
            }

            if (bid.clickCount){
                model.clickCount = bid.clickCount;
            }

            if (bid.hasOwnProperty("isNewEntry")){
                model.isNewEntry = bid.isNewEntry;
            }

            if (bid.hasOwnProperty("isActive")){
                model.isActive = bid.isActive;
            }

            if (bid.hasOwnProperty("isAccepted")){
                model.isAccepted = bid.isAccepted;
            }

            if (bid.originCampiagn){
                model.originCampiagn = bid.originCampiagn;
            }

            return model;

        });

        $scope.saving = true;

        //update all of them
        $q.all(
            toSave.map(function(bid){
                return BidModel.update(bid);
            })
        )
        .then(function(results){

            //recategorize videos based on changes
            $scope.saving = false;
            sorted = $scope.campaign.bids.reduce(function(value,bid){

                value[sort(bid)].push(bid);
                return value;

            }, {"new": [],
                "old": [],
                "approved": [],
                "unapproved": []
            });

            originals = lodash.cloneDeep($scope.campaign.bids);

            $scope.selectedBids = sorted[$scope.selection.type];
        })
        .catch(function(err){
            console.log(err);
            $scope.saving = false;
            //TODO: handle error logging
        })
    }

    $scope.undoVideo = function(){
        $scope.clean = true;
        $scope.campaign.videos = originals;
        originals = lodash.cloneDeep(campaign.videos);

        sorted = $scope.campaign.bids.reduce(function(value,bid){

            value[sort(bid)].push(bid);
                return value;


        }, {"new": [],
            "old": [],
            "approved": [],
            "unapproved": []
        });

        originals = lodash.cloneDeep($scope.campaign.bids);

        $scope.selectedBids = sorted[$scope.selection.type];
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

.controller('ViewDialogCtrl', function DialogCtrl($scope, $mdDialog, bid) {
    $scope.bid = bid;
    $scope.dismiss = function(){
        $mdDialog.hide();
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
