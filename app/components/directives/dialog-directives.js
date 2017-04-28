angular.module('JibsApp')
    .directive('mailContent', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/navbar.view.html',
            controller: 'NavbarController'
        };
    }])
    .directive('people', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/conversation.view.html',
                controller: 'ConversationController'
            };
        }]);