'use strict';

(function () {

    var app = angular.module('onBoardingApp.home', ['onBoardingApp.home.controllers', 'onBoardingApp.home.services']);

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('adminHome', {
            url: '/',
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: '/Scripts/app/modules/home/views/onBoardingApp.home.html'
        });
    }]);

})();