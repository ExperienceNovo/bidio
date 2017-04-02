angular.module( 'bidio.footer', [
])

.controller( 'FooterCtrl', ['$scope', function FooterCtrl( $scope ) {
   	$scope.date = new Date();
}])