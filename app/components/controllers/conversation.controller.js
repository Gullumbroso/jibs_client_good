angular.module('JibsApp')

    .controller('ConversationController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $scope.userQuestion = "";

            $scope.signIn = function() {
                console.log("Yeah!");
            };

            $scope.firstQuestion = function(ev) {
                if ($scope.userQuestion.length > 0) {
                    WebService.postFirstQuestion($scope.userQuestion)
                        .then(function () {
                            $mdDialog.show(
                                $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title("Success!")
                                    .textContent(":)")
                                    .ok("Got it")
                            );
                        }, function () {
                            $mdDialog.show(
                                $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title("Failure...")
                                    .textContent(":(")
                                    .ok("Got it")
                            );
                        })
                }
            }
        }]);