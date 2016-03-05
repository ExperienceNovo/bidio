angular.module( 'bidio', [
    'ui.router',
    'sails.io',
    'angularMoment',
    'duScroll',
    'lodash',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'templates-app',
    'services',
    'models',
    'bidio.home',
    'bidio.about',
    'bidio.creators',
	'bidio.contest',
    'bidio.contests',
    'bidio.intro',
    'bidio.login',
    'bidio.nav',
    'bidio.register',
    'bidio.search',
    'bidio.sponsors',
    'bidio.upload',
    'bidio.video'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {

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

})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});