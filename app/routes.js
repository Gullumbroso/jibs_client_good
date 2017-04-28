angular.module('JibsApp')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'HomeController'
            })
            .when('/home', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'ConversationController',
                pageTrack: '/home' // angular-google-analytics extension
            })
            .when('/questions', {
                templateUrl: 'app/components/views/questions.view.html',
                controller: 'QuestionsController',
                pageTrack: '/sign-up' // angular-google-analytics extension
            })
            .otherwise({redirectTo: '/'});
    }]);
