angular.module( 'bidio', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'chart.js',
    'duScroll',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'vjs.video',
    'models',
    'ngFileUpload',
    'ngMaterial',
    'bidio.home',
    'bidio.about',
    'bidio.account',
    'bidio.creators',
	'bidio.contest',
    'bidio.contests',
    'bidio.dashboard',
    'bidio.footer',
    'bidio.intro',
    'bidio.login',
    'bidio.nav',
    'bidio.register',
    'bidio.search',
    'bidio.sponsors',
    'bidio.upload',
    'bidio.video',
    'bidio.admin'
])

.config( function myAppConfig ( $mdThemingProvider, $urlRouterProvider, $locationProvider ) {

    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/contests/', '/contests');

    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {
            window.location = '/';
        }
        else {
            // pass through to let the web server handle this request
            window.location = $location.$$absUrl;
        }
    });

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('orange');

})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});