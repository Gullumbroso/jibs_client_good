angular.module('JibsApp')

    .controller('ConversationController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu) {

            $scope.signIn = function() {
                console.log("Yeah!");
            }

            $scope.clickOnInput = function() {

            }
        }]);