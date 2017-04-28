angular.module('JibsApp')
    .directive('navbar', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/navbar.view.html',
            controller: 'NavbarController'
        };
    }])
    .directive('conversation', ['$location', '$rootScope',
        function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/conversation.view.html',
            controller: 'ConversationController'
        };
    }])
    .directive('sidenav', ['$location', '$rootScope',
    function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/sidenav.view.html',
            controller: 'SidenavController'
        };
    }])
    .directive('state', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/state.view.html'
            };
        }])
    .directive('home', ['$location', '$rootScope',
    function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/home.view.html'
        };
    }])
    .directive('questions', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/questions.view.html'
            };
        }])
;


