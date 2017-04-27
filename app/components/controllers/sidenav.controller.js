/**
 * Created by laurescemama on 27/04/2017.
 */

angular
    .module('JibsApp')
    .controller('SidenavController', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.openLeft = buildOpener('left');
        $scope.closeLeft = buildCloser('left');
        // $scope.test = buil('left');
        //
        // function testOther(componentId) {
        //     return function () {
        //         $mdSidenav(componentId).toggle();
        //         console.log("open left sidenav");
        //     };
        // }

        function buildOpener(componentId) {
            return function () {
                $mdSidenav(componentId).open();
                console.log("open left sidenav");
            };
        }

        function buildCloser(componentId) {
            return function () {
                $mdSidenav(componentId).close();
                console.log("close left sidenav");
            };
        }
    });

