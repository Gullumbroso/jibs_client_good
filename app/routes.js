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
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);

    }]);
