angular.module('JibsApp')

    .controller('NavbarController', ['$scope', '$rootScope', '$location', '$routeParams', '$mdMedia', '$mdMenu', '$mdDialog',
        function ($scope, $rootScope, $location, $routeParams, $mdMedia, $mdMenu, $mdDialog) {

            $scope.customFullscreen = false;

            $scope.signInDialog = function(ev) {
                $mdDialog.show({
                    controller: SignInDialogController,
                    templateUrl: 'app/components/views/sign-in-dialog.view.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: false,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            function SignInDialogController($scope, $mdDialog) {

                $scope.$on('event:google-plus-signin-success', function (event,authResult) {
                    // Send login to server or save into cookie
                });
                $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
                    // Auth failure or signout detected
                });

                $scope.hide = function() {
                    $mdDialog.hide();
                };

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }
        }]);