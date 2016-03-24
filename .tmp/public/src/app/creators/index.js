angular.module( 'bidio.creators', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'creators', {
		url: '/creators',
		views: {
			"main": {
				controller: 'CreatorsCtrl',
				templateUrl: 'creators/index.tpl.html'
			}
		}
	});
})

.controller( 'CreatorsCtrl', function CreatorsController( $scope, titleService ) {
	titleService.setTitle('Creators - bidio');
});