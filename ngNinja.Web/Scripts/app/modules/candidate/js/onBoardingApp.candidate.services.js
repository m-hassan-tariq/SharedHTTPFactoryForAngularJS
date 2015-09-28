'use strict';

(function () {
    var app = angular.module('onBoardingApp.candidate.services', []);

    // This will serve as abstraction layer for underlying implemntation, Just pass URL, Request Type, Parameter Object 
    // FYI -> Its time to get our hand dirty on actual http request, so introduce new Get method in WebAPI home controller
    app.factory('candidateService', ['webApi', function (webApi) {
        return {
            getAllCandidates: function () {
                return webApi.nonParameter('GET', '/Home/GetCandidateData');
            }
        };
    }]);

})();