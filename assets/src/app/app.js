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
    'ngAnimate',
    'bidio.home',
    'bidio.about',
    'bidio.account',
    'bidio.creators',
	'bidio.campaign',
    'bidio.campaigns',
    'bidio.dashboard',
    'bidio.discover',
    'bidio.footer',
    'bidio.intro',
    'bidio.login',
    'bidio.member',
    'bidio.nav',
    'bidio.register',
    'bidio.search',
    'bidio.sponsors',
    'bidio.upload',
    'bidio.video',
    'bidio.admin'
])

.config( function myAppConfig ( $sceDelegateProvider, $mdThemingProvider, $urlRouterProvider, $locationProvider ) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://bidio8.s3.amazonaws.com/**'
    ]);

    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/campaigns/', '/campaigns');

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