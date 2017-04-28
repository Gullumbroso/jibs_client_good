angular.module('JibsApp')

    .controller('ConversationController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $scope.userQuestion = "";

            $rootScope.showNavLogo = false;

            $scope.signIn = function() {
                console.log("Yeah!");
            };

            $scope.firstQuestion = function(ev) {
                if ($scope.userQuestion.length > 0) {
                    WebService.postFirstQuestion($scope.userQuestion)
                        .then(function (response) {
                            var dataObj = response.data;
                            WebService.answer.knownData = dataObj.data;
                            WebService.answer.type = dataObj.type;
                            WebService.answer.next = dataObj.next;

                            if (WebService.answer.type == 'mail' && WebService.answer.next == 'subject') {
                                $location.path('/mail/content');
                            } else if (WebService.answer.type == 'mail' && WebService.answer.next == 'persons') {
                                $location.path('/mail/people')
                            } else if (WebService.answer.next == null) {
                                $location.path('/finish')
                            }

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