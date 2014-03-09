var ReaderApp = angular.module('ReaderApp', [] , function($interpolateProvider) {
    $interpolateProvider.startSymbol("{[{");
    $interpolateProvider.endSymbol("}]}");
});

ReaderApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "static/js/app/views/main.html",
            controller: "MainCtrl",
        })
});