angular.module( 'bidio.nav', [
	'ui.bootstrap'
])

.controller( 'NavCtrl', function NavCtrl( $scope, $state, config, $rootScope ) {
   	$scope.currentUser = config.currentUser;
   	$scope.date = new Date();
   	$rootScope.$on("$stateChangeSuccess", function() {
        window.scrollTo(0, 0);
    });
    $scope.isCollapsed = true;
})

