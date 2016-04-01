angular.module( 'bidio.footer', [
])

.controller( 'FooterCtrl', function FooterCtrl( $scope ) {
   	$scope.date = new Date();
})