angular.module( 'bidioEmbed', [
    'ui.router',
    'sails.io',
    'lodash',
    'templates-app',
    'services',
    'vjs.video',
    'models',
    'bidio.videoEmbed',
])

.config( function myAppConfig ( $sceDelegateProvider, $urlRouterProvider, $locationProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://bidio8.s3.amazonaws.com/**'
    ]);
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
})
.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
    console.log('helloApp')
});
