angular.module( 'bidio.search', [
])

.config(function config( $stateProvider ) {
    $stateProvider.state( 'seach', {
        url: '/search/:path',
        views: {
            "main": {
                controller: 'SearchCtrl',
                templateUrl: 'search/index.tpl.html'
            }
        }
    });
})

.controller( 'SearchCtrl', function SearchCtrl( $scope, titleService ) {
    titleService.setTitle('search - bidio');
});