angular.module('JibsApp')
    .directive('mailContent', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/mail-content.view.html',
            controller: 'NavbarController'
        };
    }])
    .directive('people', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/people.view.html',
                controller: 'ConversationController'
            };
        }]);