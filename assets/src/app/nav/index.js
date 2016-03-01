angular.module( 'bidio.nav', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
   	$scope.currentUser = config.currentUser;
});