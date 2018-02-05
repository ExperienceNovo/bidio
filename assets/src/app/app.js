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
    'bidio.markets',
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
    $rootScope.cre8web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-54-212-193-239.us-west-2.compute.amazonaws.com:8545"));
    //$rootScope.cre8web3 = new Web3(new Web3.providers.HttpProvider("http://cre8wium3.eastus.cloudapp.azure.com:8545"));
    

    //STORE ALL CONTRACT INFO HERE
    //VIEW CONTRACT
    $rootScope.viewTokenAbi = [{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_time","type":"uint256"}],"name":"createView","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"string"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_id","type":"string"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_id","type":"string"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"CreateViewToken","type":"event"}];
    $rootScope.viewTokenAddress = '0xF0f36c3A545fD00191ED8392028e94eE6d379f17';
    $rootScope.viewContract = $rootScope.cre8web3.eth.contract($rootScope.viewTokenAbi);
    $rootScope.viewContractInstance = $rootScope.viewContract.at($rootScope.viewTokenAddress);

    //MARKET CONTRACT
    $rootScope.marketContractAbi = [{"constant":false,"inputs":[{"name":"_member","type":"address"},{"name":"_orderExchangeAmount","type":"int256[]"},{"name":"_orderExchangeIdentifier","type":"address[]"},{"name":"_orderExchangeAmount1","type":"int256[]"},{"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_member","type":"address"},{"indexed":false,"name":"_orderExchangeAmount","type":"int256[]"},{"indexed":true,"name":"_orderExchangeIdentifier","type":"address[]"},{"indexed":false,"name":"_orderExchangeAmount1","type":"int256[]"},{"indexed":false,"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"CreateOrderEvent","type":"event"}]
    $rootScope.marketContractAddress = '0x9b870E0D29D485CB0bd2a076344B4F0bf2Fee009';
    $rootScope.marketContract = $rootScope.cre8web3.eth.contract($rootScope.marketContractAbi);
    $rootScope.marketContractInstance = $rootScope.marketContract.at($rootScope.marketContractAddress);

    //USER CONTRACT
    //$rootScope.userContractAbi = [{"constant":false,"inputs":[{"name":"_member","type":"address"},{"name":"_orderExchangeAmount","type":"int256[]"},{"name":"_orderExchangeIdentifier","type":"address[]"},{"name":"_orderExchangeAmount1","type":"int256[]"},{"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"createOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_member","type":"address"},{"indexed":false,"name":"_orderExchangeAmount","type":"int256[]"},{"indexed":true,"name":"_orderExchangeIdentifier","type":"address[]"},{"indexed":false,"name":"_orderExchangeAmount1","type":"int256[]"},{"indexed":false,"name":"_orderExchangeIdentifier1","type":"address[]"}],"name":"CreateOrder","type":"event"}]
    //$rootScope.userContractAddress = '0x21088b1d083cb55Ff99A8e4bfcC2006A29Ea6498';
    //$rootScope.userContract = $rootScope.cre8web3.eth.contract($rootScope.marketContractAbi);
    //$rootScope.userContractInstance = $rootScope.marketContract.at($rootScope.marketContractAddress);

    //SECURITY CONTRACT?


    //TODO:
    //PEER CODE - APP MINING / BROWSER MINING
    //CENTRAL PEER CODE -- SET UP S3 GETH
    //REFACTOR FRONTEND web3 INTERFACE 'CALI'
    //TOKEN SALE 

    //view contract (erc 88)-->logic
    //content contract
    //user contract
    //bid contract / market contract
    //comment? 


    // watch for changes
    $rootScope.marketContractInstance.allEvents().watch(function(error, event){
        //console.log(event);
    });

    $rootScope.viewContractInstance.allEvents().watch(function(error, event){
        //console.log(event);
    });

    $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'})
    .watch(function(error, result){
        //console.log(error, result);
    });

    // Or pass a callback to start watching immediately
    $rootScope.marketContractInstance.allEvents(function(error, log){
        //console.log(log);
    });

    $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'})
    .watch(function(error, result){
        //console.log(error, result);
    });

    $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'})
    .get(function(error, logs){
        //console.log(error, logs);
    });


    var marketEvent = $rootScope.marketContractInstance.CreateOrderEvent({fromBlock: 0, toBlock: 'latest'});

    marketEvent.watch(function(error, result){
        //console.log(error, result);
    });

    marketEvent.get(function(error, logs){
        //console.log(error, logs);
    });


    var filter = $rootScope.cre8web3.eth.filter({address:"0x9b870E0D29D485CB0bd2a076344B4F0bf2Fee009"});
    
    filter.watch(function(error, result){
        //console.log(result);
    });

    $rootScope.marketContractInstance.CreateOrderEvent(function(error, result){
       // console.log(result, error);
    });

    $rootScope.marketContractInstance.CreateOrderEvent().watch(function(error, result){
        //console.log(error, result)
    });

    //TODO: SRSLY GET THIS>>>>>>>~~~~~
    var newFilter = $rootScope.cre8web3.eth.filter({
        fromBlock: 0,
        toBlock: 'latest',
        address: '0x9b870E0D29D485CB0bd2a076344B4F0bf2Fee009',
        topics: [$rootScope.cre8web3.sha3('CreateOrderEvent(string,uint256,string,string,uint256)')]
    });

    newFilter.watch(function(error, result){
        //console.log(result, error);
    });

   
}]);
