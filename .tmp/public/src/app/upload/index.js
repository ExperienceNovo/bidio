angular.module( 'bidio.upload', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'upload', {
		url: '/upload',
		views: {
			"main": {
				controller: 'UploadCtrl',
				templateUrl: 'upload/index.tpl.html'
			}
		}
	});
})

.controller( 'UploadCtrl', function UploadCtrl( $scope, config, titleService, VideoModel, Upload ) {
	titleService.setTitle('upload - bidio');
	$scope.currentUser = config.currentUser;

	$scope.createVideo = function(newVideo){
		
		console.log(newVideo);
		newVideo.user = $scope.currentUser.id;
		VideoModel.create(newVideo);
	};
	
	$scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.upload([$scope.file]);
        }
    });

	$scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    
                    url:'/api/video',
					data: {
                      //username: $scope.username,
                      videoFile: file  
                    }
                }).then(function (resp) {
                    $timeout(function() {
                        $scope.log = 'file: ' +
                        resp.config.data.videoFile.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.log;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.videoFile.name + '\n' + 
                      $scope.log;
					$scope.pp = progressPercentage;
					$scope.fileName = evt.config.data.videoFile.name;
                });
              }
            }
        }
    };


});