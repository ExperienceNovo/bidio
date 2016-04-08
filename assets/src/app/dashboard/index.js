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
    .state( 'dashboard.contests.edit', {
        url: '/:id',
        controller: 'DashboardContestEditCtrl',
        templateUrl: 'dashboard/templates/contestEdit.tpl.html',
        resolve: {
            ContestModel: "ContestModel",
            contest: function($stateParams, ContestModel){
                return ContestModel.getOne($stateParams.id);
            }
        }
    })
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope, $location, config ) {

    if (!config.currentUser){
        $location.path("/")
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

.controller( 'DashboardVideosCtrl', function DashboardVideosCtrl( $scope, titleService, videos, VideoModel, $mdDialog, $sce ) {
    titleService.setTitle('videos');

    videos.forEach(function(video){
        video.amazonUrl = $sce.trustAsResourceUrl(video.amazonUrl);
        return video;
    })

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
            $sce.trustAsResourceUrl(result.amazonUrl);
            $scope.videos.push(result);
        })
    }
})

.controller('VideoDialogCtrl', function DialogCtrl($scope, $mdDialog, Upload, VideoModel) {
    $scope.video = {};
    $scope.loading = $scope.videoLoading = false;
    $scope.error = null;

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

.controller('DashboardContestsCtrl', function ($scope, contests, ContestModel, $mdDialog) {

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
            $scope.contests.push(result);
        })
    }
})

.controller('DashboardContestEditCtrl', function ($scope, contest, ContestModel, $mdDialog) {

    $scope.contest = contest;

    // $scope.addContest = function(ev){
    //     $mdDialog.show({
    //       controller: 'ContestDialogCtrl',
    //       templateUrl: 'dashboard/templates/createContest.tpl.html',
    //       parent: angular.element(document.body),
    //       targetEvent: ev,
    //       clickOutsideToClose:true,
    //       fullscreen: false
    //     })
    //     .then(function(result){
    //         $scope.contests.push(result);
    //     })
    // }
})

.controller('ContestDialogCtrl', function DialogCtrl($scope, $mdDialog, Upload, ContestModel) {
    $scope.contest = {};

    $scope.submit = function(contest){
        ContestModel.create(contest)
        .then(function(response){
            $mdDialog.hide(response);
        })
    }

    $scope.cancel = function(){
        $mdDialog.cancel();
    }
})