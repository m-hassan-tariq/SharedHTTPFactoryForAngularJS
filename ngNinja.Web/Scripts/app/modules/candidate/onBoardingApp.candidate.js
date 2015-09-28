'use strict';

(function () {

    var app = angular.module('onBoardingApp.candidate', [
            'onBoardingApp.candidate.services',
            'onBoardingApp.candidate.controllers'
        ]);

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('allCandidates', {
            url: '/candidates',
            controller: 'CandidateController',
            controllerAs: 'vm',
            templateUrl: '/Scripts/app/modules/candidate/views/onBoardingApp.candidate.html'
        });
    }]);

})();