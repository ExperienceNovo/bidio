angular.module( 'iboxxzAdmin.users', [
])

.config(function config( $stateProvider ) {

    $stateProvider.state( 'users', {
        url: '/admin/users',
        views: {
            "main": {
                controller: 'AdminUsersCtrl',
                templateUrl: 'admin/users/index.tpl.html'
            }
        },
        resolve: {
            users: function(UserModel) {
                return UserModel.getAll();
            }
        }
    });
})

.controller( 'AdminUsersCtrl', function AdminUsersController( $scope, $sailsSocket, config, $location, titleService, users, UserModel, lodash) {
	titleService.setTitle('Admin - iBoxxZ');
	$scope.currentUser = config.currentUser;
    $scope.users = users;

    $scope.newUserToggleFunction = function () {
        $scope.newUserToggle = $scope.newUserToggle ? false : true;
    };

    $scope.createUser = function(newUser) {
        UserModel.create(newUser).then(function(model) {
            $scope.newPost = {};
        });
    };

    $sailsSocket.subscribe('user', function (envelope) {
        switch(envelope.verb) {
            case 'created':
                $scope.users.unshift(envelope.data);
                break;
            case 'destroyed':
                lodash.remove($scope.users, {id: envelope.id});
                break;
        }
    });

});