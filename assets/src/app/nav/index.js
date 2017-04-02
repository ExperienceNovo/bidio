angular.module( 'bidio.nav', [
])

.controller( 'NavCtrl', ['$location', '$rootScope', '$scope', '$state', 'config', function NavCtrl( $location, $rootScope, $scope, $state, config ) {
   	$scope.currentUser = config.currentUser;
   	$scope.date = new Date();
   	$rootScope.$on("$stateChangeSuccess", function() {
        window.scrollTo(0, 0);
    });
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])

.directive('navCollapse', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var visible = false;

            element.on('show.bs.collapse', function () {
                visible = true;
            });

            element.on("hide.bs.collapse", function () {
                visible = false;
            });

            element.on('click', function(event) {
                if (visible && 'auto' == element.css('overflow-y')) {
                    element.collapse('hide');
                }
            });
        }
    };
});

