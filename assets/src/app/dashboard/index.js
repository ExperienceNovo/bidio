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
        views: {
            "home": {
                controller: 'DashboardHomeCtrl',
                templateUrl: 'dashboard/home.tpl.html'
            }
        }
    })
    .state( 'dashboard.analytics', {
        url: '/analytics',
        views: {
            "analytics": {
                controller: 'DashboardAnalyticsCtrl',
                templateUrl: 'dashboard/analytics.tpl.html'
            }
        }
    })
    .state( 'dashboard.videos', {
        url: '/videos',
        views: {
            "videos": {
                controller: 'DashboardVideosCtrl',
                templateUrl: 'dashboard/videos.tpl.html'
            }
        }
    })
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope ) {
})

.controller( 'DashboardHomeCtrl', function DashboardHomeCtrl( $scope, $sailsSocket, $location, titleService, lodash, config ) {
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

.controller( 'DashboardVideosCtrl', function DashboardVideosCtrl( $scope, $sailsSocket, $location, titleService, lodash, config ) {
    titleService.setTitle('videos');
    $scope.currentUser = config.currentUser;
    $scope.videos = [1,2,3,4,5]
})
