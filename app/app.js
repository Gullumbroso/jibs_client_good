angular.module('JibsApp', ['ngAnimate', 'ngMaterial'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('purple', {
                'default': '500'
            })
            .accentPalette('purple', {
                'default': '500'
            })
    })

    .run(['$rootScope', '$location','$http',
        function ($rootScope, $location, $http) {


        }]);
