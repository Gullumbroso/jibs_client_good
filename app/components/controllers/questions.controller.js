angular.module('JibsApp')

    .controller('MailContentController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $scope.next = function (ev) {
                if ($scope.content.body.length > 0) {
                    WebService.postMoreQuestions('content', $scope.content)
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
                                $mdDialog.show(
                                    $mdDialog.alert()
                                        .parent(angular.element(document.body))
                                        .clickOutsideToClose(true)
                                        .title("Finished!")
                                        .textContent(":)")
                                        .ok("Got it")
                                );
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
        }])
    .controller('MailPeopleController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {


            $scope.next = function (ev) {
                if ($scope.content.length > 0) {
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
                                $mdDialog.show(
                                    $mdDialog.alert()
                                        .parent(angular.element(document.body))
                                        .clickOutsideToClose(true)
                                        .title("Finished!")
                                        .textContent(":)")
                                        .ok("Got it")
                                );
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