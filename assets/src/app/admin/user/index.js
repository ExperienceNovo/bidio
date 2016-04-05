angular.module( 'iboxxzAdmin.user', [
])

.config(function config( $stateProvider ) {

    $stateProvider.state( 'user', {
        url: '/admin/user/:id',
        views: {
            "main": {
                controller: 'AdminUserCtrl',
                templateUrl: 'admin/user/index.tpl.html'
            }
        },
        resolve: {
            user: function(UserModel, $stateParams) {
                return UserModel.getOne($stateParams.id);
            }
        }
    });
})

.controller( 'AdminUserCtrl', function AdminUserController( $scope, config, $location, titleService, user, UserModel) {
	titleService.setTitle('Admin - iBoxxZ');
	$scope.currentUser = config.currentUser;
    $scope.user = user;

    $scope.editUser = function (user) {
        UserModel.update(user);
        $location.url('/admin/users');
    };

    $scope.destroyUser = function(user) {
        UserModel.delete(user);
        $location.url('/admin/users');
    };

});