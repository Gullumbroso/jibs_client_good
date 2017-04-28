angular.module('JibsApp')

    .controller('QuestionsController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $scope.userAnswer = "";

            $scope.signIn = function() {
                console.log("Yeah!");
            };

            $scope.firstQuestion = function(ev) {
                if ($scope.userQuestion.length > 0) {
                    WebService.postFirstQuestion($scope.userQuestion)
                        .then(function (response) {
                            var dataObj = response.data;
                            var next = dataObj.next;
                            var type = dataObj.type;
                            var dataHeKnows = dataObj.data;
                            console.log(next);
                            console.log(type);
                            console.log(dataHeKnows);
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