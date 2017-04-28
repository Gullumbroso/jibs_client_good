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
        $scope.actionIconDict = {"mail": "mail_outline", "uploud": "file_upload", "download": "file_download",
        "alarm":"alarm", "event":"date_range"};
        $scope.actionStrDict = {"mail": "Send a mail", "uploud": "Upload a file", "download": "Download a file",
            "alarm":"Set an alarm", "event":"Create an event"};


        $scope.toggleStick = function () {
            $scope.stick = !$scope.stick;
            return $scope.stick;
        };

        $scope.statesColorList = ["#f6105e", "#ffb60b", "#5c30f9"];
        $scope.colorIndex = 0;
        $scope.generateState = function () {

            // generate state
            $scope.colorIndex = ($scope.colorIndex+1)%3;
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

