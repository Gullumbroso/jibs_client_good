/**
 * Created by laurescemama on 27/04/2017.
 */

angular
    .module('JibsApp')
    .controller('SidenavController', function ($scope, $rootScope, $timeout, $mdSidenav, $log) {
        $scope.openLeft = buildOpener('left');
        $scope.closeLeft = buildCloser('left');
        $scope.stick = false;

        TYPES = ['Action', '$rootScope', 'Triggers', 'People', 'Time', 'Venue'];

        $scope.statesList = ["State", "State", "State"];

        $scope.toggleStick = function () {
            $scope.stick = !$scope.stick;
            return $scope.stick;
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

