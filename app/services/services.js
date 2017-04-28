/**
 * Created by gullumbroso on 22/08/2016.
 */

angular.module('JibsApp')
    .factory('WebService', ['$http', '$rootScope',
        function WebServiceFactory($http, $rootScope) {

            var FIRST_ANSWER_URL = 'http://127.0.0.1:8000/first_answer/';
            var MORE_QUESTIONS_URL = 'http://127.0.0.1:8000/more_questions/';

            var service = {};

            service.saveSession = saveSession;

            return service;

            /**
             * Saves the current purchase session in the local storage.
             * @param purchase - the purchase object ot save.
             */
            function saveSession(purchase) {
                if (purchase) {
                    service.purchase = purchase;
                    try {
                        localStorage.setItem(CO_SESSION, JSON.stringify(purchase));
                    }
                    catch (err) {
                        console.log("Couldn't save product's data: " + err);
                    }
                } else {
                    console.log("No product to save to the local storage.");
                }
            }

            function postFirstAnswer(firstQuestion) {
                return $http.get(FIRST_ANSWER_URL, {params: {'firstQuestion': firstQuestion}})
            }

            function postMoreQuestions(question) {
                return $http.get(MORE_QUESTIONS_URL, {params: {'moreQuestions': question}})
            }
        }]);