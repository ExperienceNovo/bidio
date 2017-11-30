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
    'LocalStorageModule',
    'ezfb',
    'stripe',
    'gavruk.card',
    'textAngular',
    'angular-thumbnails',
    'bidio.admin',
    'bidio.blog',
    'bidio.blogPost',
    'bidio.creators',
	'bidio.campaign',
    'bidio.campaigns',
    'bidio.dashboard',
    'bidio.discover',
    'bidio.footer',
    'bidio.forgotSuccess',
    'bidio.forgot',
    'bidio.home',
    'bidio.login',
    'bidio.market',
    'bidio.member',
    'bidio.nav',
    'bidio.privacy',
    'bidio.register',
    'bidio.reset',
    'bidio.resetSuccess',
    'bidio.search',
    'bidio.sponsors',
    'bidio.token',
    'bidio.video',
    'bidio.videoEmbed',
])

.config(['$locationProvider', '$mdThemingProvider', '$sceDelegateProvider', '$urlRouterProvider', 'ezfbProvider', function myAppConfig ($locationProvider, $mdThemingProvider, $sceDelegateProvider, $urlRouterProvider, ezfbProvider ) {
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path();
        var hasTrailingSlash = path[path.length-1] === '/';
        if(hasTrailingSlash) {
            var newPath = path.substr(0, path.length - 1); 
            return newPath; 
        } 
    });
    $urlRouterProvider.when('/zaxbys', '/campaign/supporting-local-musicians/about');
    Stripe.setPublishableKey('pk_live_9ElLI2wlzytll1udmMwuDyPq');//live pk_live_9ElLI2wlzytll1udmMwuDyPq //test pk_test_sflpPD96t106qt2QS8xll5up
    $sceDelegateProvider.resourceUrlWhitelist(['self','https://bidio8.s3.amazonaws.com/**']);
    if (window.location.hash && window.location.hash == '#_=_') {
        window.location.hash = '';
    }
    $urlRouterProvider.otherwise(function ($injector, $location) {
        if ($location.$$url === '/') {window.location = '/';}
        else {window.location = $location.$$absUrl;}
    });
    $locationProvider.html5Mode(true);
    $mdThemingProvider.theme('default').primaryPalette('grey').accentPalette('orange');
    ezfbProvider.setInitParams({appId: '629279003894718'});
}])
.run( function run () {
    moment.locale('en');
})
.controller( 'AppCtrl', ['$rootScope', '$scope', 'config', function AppCtrl ( $rootScope, $scope, config ) {
    config.currentUser = window.currentUser;
    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });
    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });

    //LOCALHOST FRONTEND WEB3 TESTING
    $rootScope.cre8web3 = new Web3();
    //$rootScope.cre8web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    $rootScope.cre8web3 = new Web3(new Web3.providers.HttpProvider("http://cre8wium3.eastus.cloudapp.azure.com:8545"));
    
    var filter = $rootScope.cre8web3.eth.filter('latest');
    
    filter.watch(function(error, result){
        console.log(result);
    });


}]);
