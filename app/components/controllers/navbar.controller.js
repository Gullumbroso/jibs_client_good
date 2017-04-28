angular.module('JibsApp')

    .controller('NavbarController', ['$scope', '$rootScope', '$location', '$timeout', '$routeParams', '$mdMedia', '$mdMenu', '$mdDialog',
        function ($scope, $rootScope, $location, $timeout, $routeParams, $mdMedia, $mdMenu, $mdDialog) {

            $scope.customFullscreen = false;

            $scope.signInDialog = function(ev) {
                $mdDialog.show({
                    controller: SignInDialogController,
                    templateUrl: 'app/components/views/sign-in-dialog.view.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            function SignInDialogController($scope, $mdDialog, $timeout, $window) {

                $scope.googleButtonContainer = 'googleButton';
                $timeout(function(){
                    $window.gapi.signin2.render('googleButtonPlaceholder', {
                        'scope': 'profile email',
                        'width': 350,
                        'height': 60,
                        'longtitle': true,
                        'theme': 'dark',
                        'onsuccess': $scope.success,
                        'onfailure': $scope.failure
                    });
                });

                $scope.success = function (googleUser) {

                };

                $scope.failure = function (error) {
                };

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