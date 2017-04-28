angular.module('JibsApp')

    .controller('MailContentController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $rootScope.showNavLogo = true;

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
        }])
    .controller('MailPeopleController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $rootScope.showNavLogo = true;

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
            };

            $scope.contacts = [
                {
                    'name': "Gilad Lumbroso",
                    "photo": "/assets/images/gilad_contact.jpg"
                },
                {
                    'name': "Omer Alon",
                    "photo": "/assets/images/omer_contact.jpg"
                },
                {
                    'name': "Laure Scemama",
                    "photo": "/assets/images/laure_contact.jpg"
                }
            ]
        }]);