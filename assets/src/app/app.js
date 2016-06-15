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
    'offClick',
    'services',
    'vjs.video',
    'models',
    'ngFileUpload',
    'ngMaterial',
    'ngAnimate',
    'bidio.blog',
    'bidio.blogPost',
    'bidio.creators',
	'bidio.campaign',
    'bidio.campaigns',
    'bidio.dashboard',
    'bidio.discover',
    'bidio.footer',
    'bidio.home',
    'bidio.login',
    'bidio.member',
    'bidio.nav',
    'bidio.privacy',
    'bidio.register',
    'bidio.search',
    'bidio.sponsors',
    'bidio.video',
    'bidio.admin',
    'LocalStorageModule',
    'ezfb'
])

.config( function myAppConfig ( $sceDelegateProvider, $mdThemingProvider, $urlRouterProvider, $locationProvider, ezfbProvider ) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://bidio8.s3.amazonaws.com/**'
    ]);

    $urlRouterProvider.when('/about/', '/about');
    $urlRouterProvider.when('/campaigns/', '/campaigns');
    $urlRouterProvider.when('/zaxbys', '/campaign/railhawks-tryouts.8');
    $urlRouterProvider.when('/zaxbys/', '/campaign/railhawks-tryouts.8');


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

    ezfbProvider.setInitParams({
      appId: '629279003894718'
    });
})

.run( function run () {
    moment.locale('en');
})

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});
