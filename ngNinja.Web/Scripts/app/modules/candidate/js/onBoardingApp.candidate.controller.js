'use strict';

(function () {
    var app = angular.module('onBoardingApp.candidate.controllers', []);

    app.controller('CandidateController', ['$scope', 'candidateService', function ($scope, candidateService) {

        var vm = this;

        var findCandidate = function (id) {
            for (var i in vm.candidates) {
                if (vm.candidates[i].candidate_id == id)
                    return i;
            }
        };

        // Invoke your service layer for this module
        vm.candidates = candidateService.getAllCandidates()
            .then(function (data) {
                vm.candidates = data;
            })
            .catch(function (data, status) {
                console.error('error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally");
            });

        vm.currentEdit = {};

        vm.add = function () {
            vm.candidates.push(vm.newCandidate);
            vm.newCandidate = null;
        };

        vm.edit = function (candidate) {
            vm.currentEdit[candidate.candidate_id] = true;
            vm.itemToEdit = angular.copy(candidate);
        };

        vm.cancelEdit = function (candidateId) {
            vm.currentEdit[candidateId] = false;
        };

        vm.save = function (candidate) {
            var c = findCandidate(candidate.candidate_id);
            vm.candidates[c] = vm.itemToEdit;
            vm.currentEdit[candidate.candidate_id] = false;
        };

    }]);
})();