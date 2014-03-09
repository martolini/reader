var ReaderApp = angular.module('ReaderApp', ['ngRoute'], function() {

});

ReaderApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "static/js/app/views/main.html",
            controller: "MainCtrl",
        })
});