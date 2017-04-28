angular.module('JibsApp', ['ngAnimate', 'ngMaterial', 'ngRoute', 'ngCookies', 'directive.g+signin'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': 'A700'
            })
            .accentPalette('pink', {
                'default': '500'
            })
    })

    .run(['$rootScope', '$location','$http',
        function ($rootScope, $location, $http) {

        }]);
