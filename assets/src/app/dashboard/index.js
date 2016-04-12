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
        templateUrl: 'dashboard/templates/profile.tpl.html'
    })
    .state( 'dashboard.contests', {
        url: '/contests',
        controller: 'DashboardContestsCtrl',
        templateUrl: 'dashboard/templates/contests.tpl.html',
        resolve: {
            ContestModel: "ContestModel",
            contests: function(ContestModel){
                return ContestModel.getMine();
            }
        }
    })
    .state( 'dashboard.contestEdit', {
        url: '/contest/:id',
        controller: 'DashboardContestEditCtrl',
        templateUrl: 'dashboard/templates/contestEdit.tpl.html',
        resolve: {
            ContestModel: "ContestModel",
            config: "config",
            contest: function(config, $stateParams, ContestModel){

                return ContestModel.getOne($stateParams.id);
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

    $scope.upload = function(file){

        $scope.videoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){
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
})

.controller('DashboardProfileCtrl', function ($scope) {
    
})

.controller('DashboardContestsCtrl', function (config, $state, $scope, contests, ContestModel, $mdDialog) {

    $scope.contests = contests;

    $scope.addContest = function(ev){
        $mdDialog.show({
          controller: 'ContestDialogCtrl',
          templateUrl: 'dashboard/templates/createContest.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: false
        })
        .then(function(result){

            result.id = "create";

            return ContestModel.create({
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
                contestContent: "Write exciting content here"
            });

        }).then(function(model){
            $state.go("dashboard.contestEdit", {id: model.id});
        });
    }
})

.controller('DashboardContestEditCtrl', function ($state, $mdMenu, $scope, contest, ContestModel, $mdDialog, VideoModel, lodash, $q) {

    var originals = lodash.cloneDeep(contest.videos);

    $scope.contest = contest;
    $scope.selection = {type: "new"};
    $scope.clean = true;
    $scope.saving = false;
    $scope.editingLanding = false;
    $scope.editingInfo = false;
    $scope.editingPrompt = false;
    $scope.contentHolder = null;
    $scope.infoHolder = null;
    $scope.promptHolder = null;

    var sorted = {
        "new": $scope.contest.videos.filter(function(video){return video.isNew}),
        "approved": $scope.contest.videos.filter(function(video){return !video.isNew && video.approved}),
        "unapproved": $scope.contest.videos.filter(function(video){return !video.isNew && !video.approved})
    };

    $scope.totalClicks = $scope.contest.videos.reduce(function(val,item){
        val += item.clickCount;
        return val;
    },0);

    $scope.totalViews = $scope.contest.videos.reduce(function(val,item){
        val += item.viewCount;
        return val;
    },0);

    $scope.topViews = $scope.contest.videos.sort(function(a,b){
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

    $scope.topClicks = $scope.contest.videos.sort(function(a,b){
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

    $scope.topConversion = $scope.contest.videos.sort(function(a,b){
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

    $scope.publish = function(){
        //check canPublish first
        $scope.contest.published = true;
        contestSave()
            .then(function(result){
                $state.go("dashboard.contests")
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
                contest: function(){
                    return contest;
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
                contest: function(){
                    return contest;
                }
            },
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        })

    }

    $scope.editInfoToggle = function(){
        $scope.infoHolder = lodash.clone($scope.contest.contestContent);
        $scope.editingInfo = !$scope.editingInfo;
    }

    $scope.editLandingToggle = function(){
        $scope.contentHolder = lodash.clone($scope.contest.contestContent);
        $scope.editingLanding = !$scope.editingLanding;
    }

    $scope.editPromptToggle = function(){
        $scope.promptHolder = lodash.clone($scope.contest.prompt);
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

    function contestSave(){
        $scope.saving = true;

        var toUpdate = {
            id: $scope.contest.id,
            bannerUrl: $scope.contest.bannerUrl,
            videoUrl: $scope.contest.videoUrl,
            published: $scope.contest.published,
            title: $scope.contest.title,
            price: $scope.contest.price,
            user: $scope.contest.user.id,
            urlTitle: $scope.contest.urlTitle,
            prompt: $scope.contest.prompt,
            intro: $scope.contest.intro,
            contestContent: $scope.contest.contestContent
        };

        if($scope.contest.contributionGoal){
            toUpdate.contributionGoal = $scope.contest.contributionGoal;
        }

        if($scope.contest.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = $scope.contest.maxContributionPerVideo;
        }

        return ContestModel.update(toUpdate)
    }

    $scope.landingSave = function(){

        contestSave()
            .then(function(contest){

                $scope.saving = false;
                $scope.editLandingToggle();

            })
            .catch(function(err){

                $scope.saving = false;

            });
    }

    $scope.infoSave = function(){

        contestSave()
            .then(function(contest){

                $scope.infoSaving = false;
                $scope.editInfoToggle();

            })
            .catch(function(err){

                $scope.infoSaving = false;

            });
    }

    $scope.promptSave = function(){

        contestSave()
            .then(function(contest){

                $scope.promptSaving = false;
                $scope.editPromptToggle();

            })
            .catch(function(err){

                $scope.promptSaving = false;

            });
    }

    $scope.landingUndo = function(){

        $scope.contest.contestContent = $scope.contentHolder;
        $scope.editLandingToggle();
    }

    $scope.infoUndo = function(){

        $scope.contest.info = $scope.infoHolder;
        $scope.editInfoToggle();
    }

    $scope.promptUndo = function(){

        $scope.contest.prompt = $scope.promptHolder;
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

        console.log(toSave);

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
                "new": $scope.contest.videos.filter(function(video){return video.isNew}),
                "approved": $scope.contest.videos.filter(function(video){return !video.isNew && video.approved}),
                "unapproved": $scope.contest.videos.filter(function(video){return !video.isNew && !video.approved})
            };
            $scope.selectedVideos = sorted[$scope.selection.typ];
        })
        .catch(function(err){
            $scope.saving = false;
            //TODO: handle error logging
        })
    }

    $scope.undo = function(){
        $scope.clean = true;
        $scope.contest.videos = originals;
        originals = lodash.cloneDeep(contest.videos);

        sorted = {
            "new": $scope.contest.videos.filter(function(video){return video.isNew}),
            "approved": $scope.contest.videos.filter(function(video){return !video.isNew && video.approved}),
            "unapproved": $scope.contest.videos.filter(function(video){return !video.isNew && !video.approved})
        };

        $scope.selectedVideos = sorted[$scope.selection.type];
    }
})

.controller('AddPhotoCtrl', function ($scope, $mdDialog, Upload, contest, ContestModel) {

    $scope.pp = 0;
    $scope.bannerUrl = null;
    $scope.photoLoading = false;
    $scope.error = null;

    $scope.submit = function(){

        contest.bannerUrl = $scope.bannerUrl;

        var toUpdate = {
            id: contest.id,
            bannerUrl: contest.bannerUrl,
            videoUrl: contest.videoUrl,
            published: contest.published,
            title: contest.title,
            price: contest.price,
            user: contest.user.id,
            urlTitle: contest.urlTitle,
            prompt: contest.prompt,
            intro: contest.intro,
            contestContent: contest.contestContent
        };

        if(contest.contributionGoal){
            toUpdate.contributionGoal = contest.contributionGoal;
        }

        if(contest.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = contest.maxContributionPerVideo;
        }

        ContestModel.update(toUpdate)
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

.controller('AddVideoCtrl', function ($scope, $mdDialog, Upload, contest, ContestModel, VideoModel) {

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

        contest.videoUrl = $scope.videoUrl;

        var toUpdate = {
            id: contest.id,
            bannerUrl: contest.bannerUrl,
            videoUrl: contest.videoUrl,
            published: contest.published,
            title: contest.title,
            price: contest.price,
            user: contest.user.id,
            urlTitle: contest.urlTitle,
            prompt: contest.prompt,
            intro: contest.intro,
            contestContent: contest.contestContent
        };

        if(contest.contributionGoal){
            toUpdate.contributionGoal = contest.contributionGoal;
        }

        if(contest.maxContributionPerVideo){
            toUpdate.maxContributionPerVideo = contest.maxContributionPerVideo;
        }

        ContestModel.update(toUpdate)
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

.controller('ContestDialogCtrl', function DialogCtrl($scope, $mdDialog, Upload, ContestModel) {
    $scope.contest = {};
    $scope.error = null;

    $scope.submit = function(contest){

        if (!contest.title || !contest.urlTitle){
            $scope.error = "Title and URL Title required"
        }

        ContestModel.check(contest)
            .then(function(){
                $mdDialog.hide(contest);
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