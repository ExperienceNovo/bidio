angular.module( 'bidio.admin', [
])

.config(function config( $stateProvider ) {

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
        controller: 'MainCtrl',
        templateUrl: 'admin/templates/main.tpl.html'
    })
    .state( 'admin.users', {
        url: '/users',
        controller: 'UserCtrl',
        templateUrl: 'admin/templates/users.tpl.html',
        resolve: {
            UserModel: "UserModel",
            users: function(UserModel){
                return UserModel.getSome(10,0);
            }
        }
    })
    .state( 'admin.bids', {
        url: '/bids',
        controller: 'BidCtrl',
        templateUrl: 'admin/templates/bids.tpl.html'
    })
    .state( 'admin.videos', {
        url: '/videos',
        controller: 'VidCtrl',
        templateUrl: 'admin/templates/videos.tpl.html'
    })
    .state( 'admin.contests', {
        url: '/contest',
        controller: 'ContestCtrl',
        templateUrl: 'admin/templates/contests.tpl.html'
    });
})

.controller( 'AdminCtrl', function AdminController( $mdSidenav, $scope, config, $location, titleService) {

	titleService.setTitle('Admin - bidio');
	$scope.currentUser = config.currentUser;

    if (!config.currentUser || !config.currentUser.isAdmin){
        $location.path("/")
    }
})

.controller( 'MainCtrl', function MainController( $scope ){

})
.controller( 'UserCtrl', function MainController( $scope, users, UserModel, lodash ){

    $scope.page = 0;

    $scope.users = users;

    $scope.isMax = false;

    $scope.isLoading = false;

    $scope.pageUp = function(){

        $scope.isLoading = true;

        UserModel.getSome(10, 10 * ($scope.page + 1))
            .then(function(users){
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

    }

    $scope.pageDown = function(){
        if ($scope.page == 0) {return}
        $scope.isLoading = true;

        //May want to safeguard against scenario where a user is near the end and a bunch of stuff gets deleted
        UserModel.getSome(10, 10 * ($scope.page - 1))
            .then(function(users){
                $scope.users = users;
                $scope.isLoading = false;
                $scope.page -= 1;
                $scope.isMax = false;
            });
    }

    $scope.update = function(user){
        $scope.isLoading = true;

        UserModel.update(user)
            .then(function(){
                $scope.isLoading = false;
            })
            .catch(function(err){
                console.log(err);
                $scope.isLoading = false;
            })
    }

    $scope.delete = function(id){
        $scope.isLoading = true;

        UserModel.delete(id)
            .then(function(){
                var user = lodash.find($scope.users, {id: id});
                var userIndex = $scope.users.indexOf(user);
                $scope.users.splice(userIndex, 1);
                $scope.isLoading = false;
            })
            .catch(function(err){
                console.log(err);
                $scope.isLoading = false;
            })
    }

})
.controller( 'BidCtrl', function MainController( $scope ){

})
.controller( 'VidCtrl', function MainController( $scope ){

})
.controller( 'ContestCtrl', function MainController( $scope ){

});