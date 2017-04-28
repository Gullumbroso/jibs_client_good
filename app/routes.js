angular.module('JibsApp')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'HomeController'
            })
            .when('/home', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'HomeController',
                pageTrack: '/home' // angular-google-analytics extension
            })
            .when('/sign-up', {
                templateUrl: 'app/components/views/sign-in-dialog.view.html',
                controller: 'SignUpController',
                pageTrack: '/sign-up' // angular-google-analytics extension
            })
            .otherwise({redirectTo: '/'});
    }]);
