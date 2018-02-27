angular.module( 'bidio.search', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'search', {
        url: '/search',
        views: {
            "main": {
                controller: 'SearchCtrl',
                templateUrl: 'search/index.tpl.html'
            }
        }
    });
}])

.controller( 'SearchCtrl', ['$scope', 'titleService', function SearchCtrl( $scope, titleService ) {
    titleService.setTitle('search | bidio');
    /*$scope.keyPress = function(searchValue){
        SearchModel.search(searchValue).then(function(models){
            $scope.searchResults = models;
        });
    }*/
}]);