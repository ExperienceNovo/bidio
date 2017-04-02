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

.config(['$locationProvider', '$sceDelegateProvider', '$urlRouterProvider', function myAppConfig ( $locationProvider, $sceDelegateProvider, $urlRouterProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self','https://bidio8.s3.amazonaws.com/**']);
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
}])
.controller( 'AppCtrl', ['$scope', 'config', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
}]);
