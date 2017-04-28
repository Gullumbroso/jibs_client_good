/**
 * Created by laurescemama on 27/04/2017.
 */

angular
    .module('JibsApp')
    .controller('SidenavController', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.openLeft = buildOpener('left');
        $scope.closeLeft = buildCloser('left');
        $scope.stick = false;
        $scope.toggleStick = function (){
                if ($scope.stick) {
                    $scope.stick = false;
                } else {
                    $scope.stick = true;
                }
        };

        function buildOpener(componentId) {
            return function () {
                $mdSidenav(componentId).open();
                console.log("open left sidenav");
            };
        }

        function buildCloser(componentId) {
            return function () {
                if (!$scope.stick) {
                    $mdSidenav(componentId).close();
                    console.log("close left sidenav");
                }
            };
        }


    });

