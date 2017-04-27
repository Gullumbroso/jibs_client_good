angular.module('JibsApp')
    .directive('navbar', ['$location', '$routeParams', '$rootScope', function ($location, $routeParams, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/navbar.view.html',
            controller: 'NavbarController'
        };
    }])
    .directive('conversation', ['$location', '$routeParams', '$rootScope',
        function ($location, $routeParams, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/conversation.view.html',
            controller: 'ConversationController'
        };
    }]);