angular.module('JibsApp')

    .controller('NavbarController', ['$scope', '$rootScope', '$location', '$routeParams', '$mdMedia', '$mdMenu',
        function ($scope, $rootScope, $location, $routeParams, $mdMedia, $mdMenu) {

            $scope.signIn = function() {
                console.log("Yeah!");
            }
        }]);