
angular.module('JibsApp')

    .controller('MailContentController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $rootScope.showNavLogo = true;
        }]);