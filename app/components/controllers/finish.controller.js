
angular.module('JibsApp')

    .controller('FinishController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $rootScope.showNavLogo = false;
        }]);