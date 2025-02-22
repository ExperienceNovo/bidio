angular.module( 'bidio.admin', [
])

.config(['$stateProvider', function config( $stateProvider ) {
    $stateProvider.state( 'admin', {
        abstract: true,
        url: '/admin',
        views: {
            "main": {
                controller: 'AdminCtrl',
                templateUrl: 'admin/index.tpl.html'
            }
        }
    })
    .state( 'admin.main', {
        url: '',
        controller: 'MainAdminCtrl',
        templateUrl: 'admin/templates/main.tpl.html'
    })
    .state( 'admin.users', {
        url: '/users',
        controller: 'UserAdminCtrl',
        templateUrl: 'admin/templates/users.tpl.html',
        resolve: {
            users: ['UserModel', function(UserModel){
                return UserModel.getSome(10,0);
            }]
        }
    })
    .state( 'admin.bids', {
        url: '/bids',
        controller: 'BidAdminCtrl',
        templateUrl: 'admin/templates/bids.tpl.html'
    })
    .state( 'admin.videos', {
        url: '/videos',
        controller: 'VidAdminCtrl',
        templateUrl: 'admin/templates/videos.tpl.html'
    })
    .state( 'admin.campaigns', {
        url: '/campaign',
        controller: 'CampaignAdminCtrl',
        templateUrl: 'admin/templates/campaigns.tpl.html'
    });
}])

.controller( 'AdminCtrl', ['$location', '$mdSidenav', '$scope', 'config', 'titleService', function AdminController( $location, $mdSidenav, $scope, config, titleService) {
	titleService.setTitle('Admin - bidio');
	$scope.currentUser = config.currentUser;
    if (!config.currentUser || !config.currentUser.isAdmin){$location.path("/")}
}])

.controller( 'MainAdminCtrl', ['$scope', function MainController( $scope ){
}])

.controller( 'UserAdminCtrl', ['$scope', 'lodash', 'UserModel', 'users', function MainController( $scope, lodash, UserModel, users ){
    $scope.page = 0;
    $scope.users = users;
    $scope.isMax = false;
    $scope.isLoading = false;
    $scope.pageUp = function(){
        $scope.isLoading = true;
        UserModel.getSome(10, 10 * ($scope.page + 1)).then(function(users){
            if (!users.length){
                $scope.isLoading = false;
                $scope.isMax = true;
                return;
            }
            $scope.users = users;
            $scope.isLoading = false;
            $scope.isMax = false;
            $scope.page += 1;
        });

    };

    $scope.pageDown = function(){
        if ($scope.page == 0) {return}
        $scope.isLoading = true;
        //May want to safeguard against scenario where a user is near the end and a bunch of stuff gets deleted
        UserModel.getSome(10, 10 * ($scope.page - 1)).then(function(users){
            $scope.users = users;
            $scope.isLoading = false;
            $scope.page -= 1;
            $scope.isMax = false;
        });
    };

    $scope.update = function(user){
        $scope.isLoading = true;
        UserModel.update(user).then(function(){
            $scope.isLoading = false;
        })
        .catch(function(err){
            console.log(err);
            $scope.isLoading = false;
        })
    };

    $scope.delete = function(id){
        $scope.isLoading = true;
        UserModel.delete(id).then(function(){
            var user = lodash.find($scope.users, {id: id});
            var userIndex = $scope.users.indexOf(user);
            $scope.users.splice(userIndex, 1);
            $scope.isLoading = false;
        })
        .catch(function(err){
            console.log(err);
            $scope.isLoading = false;
        })
    };

}])
.controller( 'BidAdminCtrl', ['$scope', function MainController( $scope ){
}])
.controller( 'VidAdminCtrl', ['$scope', function MainController( $scope ){
}])
.controller( 'CampaignAdminCtrl', ['$scope', function MainController( $scope ){
}]);