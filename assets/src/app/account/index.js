angular.module( 'bidio.account', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'account', {
		url: '/account',
		views: {
			"main": {
				controller: 'AccountCtrl',
				templateUrl: 'account/index.tpl.html'
			}
		}
	});
})

.controller( 'AccountCtrl', function AccountController( $scope, config, titleService, VideoModel, Upload, UserModel ) {
	titleService.setTitle('Account - bidio');
	$scope.currentUser = config.currentUser;

	$scope.createVideo = function(newVideo){
		console.log(newVideo);
		$scope.newVideo.user = $scope.currentUser.id;
		VideoModel.create(newVideo);
	};

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.upload($scope.file);
        }
    });

	$scope.upload = function (file) {
        if (file) {
            if (!file.$error) {
				
                $scope.currentUser.user = $scope.currentUser.id;
                Upload.upload({
                    url:'api/user',
                    data: {
                        userData: Upload.json($scope.currentUser),
                        avatarFile: file  
                    }
                })
                .then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.avatarFile.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                    }, null, function (evt) {
                        var progressPercentage = parseInt(100.0 *
                        evt.loaded / evt.total);
                        $scope.log = 'progress: ' + progressPercentage + 
                        '% ' + evt.config.data.avatarFile.name + '\n' + $scope.log;
                        $scope.pp = progressPercentage;
                        $scope.fileName = evt.config.data.avatarFile.name;
						console.log(file);
						$scope
                });
            }
        }
    };
	
	$scope.update = function(updatedUser){
		$scope.msg = 'Data sent: '+ JSON.stringify(updatedUser);
		console.log($scope.msg);
		console.log("msg sent");
		
		updatedUser.id = currentUser.id;
		
		console.log("id in index for front end " + updatedUser.id);
		
		UserModel.update(updatedUser);
	};


});