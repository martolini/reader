var ReaderApp = angular.module('ReaderApp', ['ngRoute', 'ngResource'], function() {});

ReaderApp.config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRFToken'] = '{{ csrf_token|escapejs }}';
    $routeProvider
        .when("/", {
            templateUrl: "static/js/app/views/main.html",
            controller: "MainCtrl",
        })
        .otherwise({
            redirectTo: '/'
        })
});