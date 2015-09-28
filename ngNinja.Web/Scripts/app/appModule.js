'use strict';

(function () {

    var app = angular.module('onBoardingApp', [
        'ui.router'
        , 'onBoardingApp.home'
        , 'onBoardingApp.candidate'
        , 'onBoardingApp.layout'
    ]);

    // This will be shared service which will be consumed by all modules for executing CRUD operation, 
    // Request Type, URL, Parameter Object will be passed to this shared service, so it will make code more maintainable
    // readble and scaleble. If we dont go through this method then we have to use $http.get() or $http.post method
    // every where in services files of each module, content negotiation issues can be simply handled over here, 
    // If you want to append anything with each URL like 'Http:\\Jobcorp\' then instead of copy it on every service file
    // just hardcode this thing in this file and append URL from thier respective services. 
    // We dont need to mention protocol and hostname now in every URL request. 

    app.factory("webApi", [
        '$http', '$templateCache', '$q', function ($http, $templateCache, $q) {
            return {
                withParameter: function (methodType, webApiUrl, parameterObject) {
                    var deferred = $q.defer();
                    $http({
                        method: methodType,
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + webApiUrl,
                        data: parameterObject,
                        cache: $templateCache
                    })
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                    return deferred.promise;
                },
                nonParameter: function (methodType, webApiUrl) {
                    var deferred = $q.defer();
                    $http({
                        method: methodType,
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + webApiUrl,
                        cache: $templateCache
                    })
                    .success(deferred.resolve)
                    .error(deferred.resolve);
                    return deferred.promise;
                },
            }
        }
    ]);

})();