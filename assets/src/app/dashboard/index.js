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
        templateUrl: 'dashboard/templates/analytics.tpl.html',
        resolve: {
            CampaignModel: "CampaignModel",
            campaigns: function(CampaignModel){
                return CampaignModel.getMine();
            },
            VideoModel: 'VideoModel',
            videos: function(VideoModel){
                return VideoModel.getMine();
            }
        }
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
    .state( 'dashboard.campaign', {
        url: '/campaign/:id',
        controller: 'DashboardCampaignCtrl',
        templateUrl: 'dashboard/templates/campaign.tpl.html',
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

	if (localStorageService.get('redirectTo')) {
		$location.path(localStorageService.get('redirectTo'));
		localStorageService.remove('redirectTo');
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

.controller( 'DashboardAnalyticsCtrl', function DashboardAnalyticsCtrl( $scope, titleService, config, campaigns, videos ) {
	titleService.setTitle('analytics');
    $scope.currentUser = config.currentUser;
    $scope.campaigns = campaigns;
    $scope.videos = videos;

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

.controller( 'DashboardVideoCtrl', function DashboardVideosCtrl( $scope, titleService, video, views, VideoModel, clicks, $sailsSocket, $location ) {
    $scope.video = video;
    titleService.setTitle(video.title);
    $scope.views = views;
    $scope.clicks = clicks;
    $scope.editingInfo = false;
    $scope.viewLabels = [];
    $scope.viewSeries = ['Views', 'Clicks']
    $scope.viewData = [[],[]];

    $scope.editInfoToggle = function(){
        $scope.editingInfo = !$scope.editingInfo;
    }

    function videoSave(){
        $scope.infoSaving = true;
        var toUpdate = {
            id: $scope.video.id,
            title: $scope.video.title,
            description: $scope.video.description,
        };
        return VideoModel.update(toUpdate)
    }

    $scope.infoSave = function(){
        videoSave()
        .then(function(video){
            $scope.infoSaving = false;
            $scope.editInfoToggle();
        })
        .catch(function(err){
            $scope.infoSaving = false;
        });
    };

    $scope.infoUndo = function(){
        $scope.editInfoToggle();
    };

    $scope.videoDelete = function () {
        //confirmation modal here
        VideoModel.delete($scope.video).then(function(){
            $location.path('/dashboard/videos')
        });

    };

    $scope.updateViews = function(){

        $scope.startDate = new Date($scope.views[0].createdAt);
        $scope.endDate = new Date($scope.views[$scope.views.length-1].createdAt);
        $scope.dayCount = Math.floor(( Date.parse($scope.endDate) - Date.parse($scope.startDate)) / 86400000);

        //this is tricky
        var currentDate = new Date($scope.startDate.getTime());
        var newDate = new Date(currentDate.getTime());
        var newDate2 = new Date(currentDate.getTime());
        var viewArray = _.pluck($scope.views, 'createdAt').map(function(a) {return new Date(a);});
        console.log(viewArray)

        function sliced(array,min,max){
            return array.slice(_.sortedIndex(array, min),_.sortedIndex(array, max)+1);
        }

        for(var i = 0; i < $scope.dayCount; i++) {
            var newDate = new Date(newDate.getTime());
            newDate.setDate(newDate.getDate() + 1);
            var newDate2 = new Date(newDate.getTime());
            newDate.setDate(newDate.getDate() + 2);

            $scope.viewLabels.push(new Date(newDate.getTime()).toISOString().slice(5, 10));
            var slicedArray = sliced(viewArray, newDate, newDate2)
            //console.log(slicedArray);

            $scope.viewData[0].push(sliced(viewArray, newDate, newDate2).length)
  

        }

        if($scope.views){
            for (x in $scope.views){
                var dateObj = new Date($scope.views[x].createdAt);
                //$scope.viewData[0].push(x);
            }
            for (x in $scope.clicks){
                $scope.viewData[1].push(x);
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

.controller('DashboardProfileCtrl', function ($state, titleService, $scope, user, ProfileModel, UserModel, $mdDialog, $location, localStorageService) {
    titleService.setTitle('profile');

    $scope.username = user.username;
    $scope.submitLoading = false;
    $scope.profile = user.profile[0];
	$scope.passports = user.passports;
	$scope.user = user;

    $scope.submit = function(profile){

        $scope.submitLoading = true;

        var toUpdate = {id: profile.id};

        if (profile.pictureUrl){
            toUpdate.pictureUrl = profile.pictureUrl;
        }

        if (profile.bannerUrl){
            toUpdate.bannerUrl = profile.bannerUrl;
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
            $scope.profile.pictureUrl = result;
        })
    }

    $scope.addBannerPic = function(ev){

        $mdDialog.show({
          controller: 'ProfilePicCtrl',
          templateUrl: 'dashboard/templates/addProfilePic.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(function(result){
            $scope.profile.bannerUrl = result;
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

	$scope.hasSinglePassport = function() {
		return $scope.passports.length <= 1;
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

.controller('DashboardCampaignsCtrl', function (config, titleService, $state, $scope, campaigns, CampaignModel, $mdDialog) {
    titleService.setTitle('campaigns');

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
                campaignImageUrl: "http://placehold.it/250x250?text=image",
                bannerUrl: "http://placehold.it/1000x400?text=banner",
                /*placeholder here*/
                videoUrl: "/videos/video.mp4",
                published: false,
                title: result.title,
                price: "0.10",
                user: config.currentUser.id,
                urlTitle: result.urlTitle,
                prompt: "This will be the message that encourages click-throughs to the sponsor",
                intro: "Write an exiciting intro here",
                campaignContent: "Write exciting content here"
            });

        }).then(function(model){
            $state.go("dashboard.campaign", {id: model.id});
        });
    }
})

.controller('DashboardCampaignCtrl', function ($state, titleService, $mdMenu, $scope, campaign, CampaignModel, $mdDialog, VideoModel, lodash, $q, BidModel) {

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
    titleService.setTitle(campaign.title);

    $scope.selection = {type: "new"};
    $scope.clean = true;
    $scope.saving = false;
    $scope.editingLanding = false;
    $scope.editingTitle = false;
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
        console.log(item)
        if (item.video){
            val += item.video.clickCount;
            return val;
        }
    },0);

    $scope.totalViews = $scope.campaign.bids.reduce(function(val,item){
        if (item.video){
            val += item.video.viewCount;
            return val;
        }
    },0);

    $scope.topViews = $scope.campaign.bids.sort(function(a,b){
        if (a.video && b.video){
            if (a.video.viewCount < b.video.viewCount){
                return 1
            }
            if (a.video.viewCount == b.video.viewCount){
                return 0;
            }
            if (a.video.viewCount > b.video.viewCount){
                return -1
            }
        }
    })[0];

    $scope.topClicks = $scope.campaign.bids.sort(function(a,b){
        if (a.video && b.video){
            if (a.video.clickCount < b.video.clickCount){
                return 1
            }
            if (a.video.clickCount == b.video.clickCount){
                return 0;
            }
            if (a.video.clickCount > b.video.clickCount){
                return -1
            }
        }
    })[0];

    $scope.topConversion = $scope.campaign.bids.sort(function(a,b){
        if (a.video && b.video){
            if ((a.video.clickCount / a.video.viewCount) < (b.video.clickCount / b.video.viewCount)){
                return 1;
            }
            if ((a.video.clickCount / a.video.viewCount) == (b.video.clickCount / b.video.viewCount)){
                return 0;
            }
            if ((a.video.clickCount / a.video.viewCount) > (b.video.clickCount / b.video.viewCount)){
                return -1;
            }
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

    $scope.getBannerImage = function(ev){

        $mdDialog.show({
            controller: 'AddBannerPhotoCtrl',
            templateUrl: 'dashboard/templates/addBannerPhoto.tpl.html',
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

    $scope.getCampaignImage = function(ev){

        $mdDialog.show({
            controller: 'AddCampaignPhotoCtrl',
            templateUrl: 'dashboard/templates/addCampaignPhoto.tpl.html',
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

    $scope.editTitleToggle = function(){
        $scope.infoHolder = lodash.clone($scope.campaign.title);
        $scope.editingTitle = !$scope.editingTitle;
        console.log($scope.editingTitle)
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

        return CampaignModel.update(toUpdate);
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

    $scope.titleSave = function(){
        campaignSave()
        .then(function(campaign){
            $scope.campaign = campaign[0];
            $scope.infoSaving = false;
            $scope.editTitleToggle();
        })
        .catch(function(err){
            $scope.infoSaving = false;
            $scope.editTitleToggle();
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

    $scope.titleUndo = function(){
        $scope.campaign.title = $scope.infoHolder;
        $scope.editTitleToggle();
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

.controller('AddBannerPhotoCtrl', function ($scope, $mdDialog, Upload, campaign, CampaignModel) {

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

.controller('AddCampaignPhotoCtrl', function ($scope, $mdDialog, Upload, campaign, CampaignModel) {

    $scope.pp = 0;
    $scope.campaignImageUrl = null;
    $scope.photoLoading = false;
    $scope.error = null;

    $scope.submit = function(){
        campaign.campaignImageUrl = $scope.campaignImageUrl;
        var toUpdate = {
            id: campaign.id,
            bannerUrl: campaign.bannerUrl,
            campaignImageUrl: campaign.campaignImageUrl,
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
            $scope.campaignImageUrl = response.data.amazonUrl;
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
