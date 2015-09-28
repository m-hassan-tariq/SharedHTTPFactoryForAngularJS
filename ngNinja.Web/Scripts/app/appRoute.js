'use strict';

// App wise routing

angular.module('onBoardingApp').run(['$state', function ($state) {
    $state.go('adminHome');
}]);