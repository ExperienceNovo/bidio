angular.module( 'bidio.contest', [
	'ui.bootstrap',
	'ngAnimate'
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'contest', {
		abstract: true,
		url: '/contest/:path',
		views: {
			"main": {
				controller: 'ContestCtrl',
				templateUrl: 'contest/index.tpl.html'
			}
		},
		resolve: {

			ContestModel: "ContestModel",
			$stateParams: "$stateParams",
			contest: function(ContestModel, $stateParams){
				return ContestModel.getByUrl($stateParams.path)
				.catch(function(err){
					console.log(err);
				});
			}
		}
	})
	.state( 'contest.main', {
		url: "",
		templateUrl: "contest/templates/main.tpl.html"
	})
	.state( 'contest.about', {
		url: "/about",
		templateUrl: "contest/templates/about.tpl.html"
	});
})

.controller( 'ContestCtrl', function ContestCtrl( $scope, config, titleService, ContestModel, contest, $sce, $uibModal ) {

	//contest.contestContent = $sce.trustAsHtml(contest.contestContent);
	contest.title = $sce.trustAsHtml(contest.title);

	contest.videos = contest.videos.map(function(video){
		video.amazonUrl = $sce.trustAsResourceUrl(video.amazonUrl);
		return video;
	})

	titleService.setTitle('contest - bidio');
	$scope.currentUser = config.currentUser;
	$scope.contest = contest;

	$scope.updateContest = function(contest){
		ContestModel.update(contest);
	}

	$scope.apply = function(){
		$uibModal.open({
			animation: true,
			templateUrl: "contest/templates/submitModal.tpl.html",
			controller: "submitVideoCtrl",
			resolve: {
				contest: function(){return contest}
			}
		});

	}

})

.controller('submitVideoCtrl', function ($scope, contest, config, $uibModalInstance, Upload, VideoModel) {

		$scope.contest = contest;

		$scope.currentUser = config.currentUser;
		$scope.video = {contest: contest.id};
		$scope.pp = 0;
		$scope.error = null;
		$scope.loading = false;
		$scope.videoLoading = false;
		$scope.finished = false;

		$scope.upload = function(file){

        $scope.videoLoading = true;

        Upload.upload({
            url: '/api/video/upload',
            method: 'POST',
            data: {video: file}
        })
        .then(function(response){
            $scope.videoLoading = false;
            $scope.video.amazonUrl = response.data.amazonUrl;
        },
        null,
        function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.pp = progressPercentage;
        })

    };

    $scope.submit = function(video){

        if (!video.urlTitle, !video.title, !video.amazonUrl, !video.description){
            $scope.error = "Incomplete entry";
            return;
        }

        $scope.loading = true;

        VideoModel.create(video)
        .then(function(response){
            $scope.loading = false;
            $scope.finished = true;
        })
        .catch(function(response){
            //TODO: more details plz
            $scope.error = "An error occurred";
            $scope.loading = false;
        })
    }

		$scope.cancel = function(){
			$uibModalInstance.close();
		}

});
