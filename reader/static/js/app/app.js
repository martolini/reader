var ReaderApp = angular.module('ReaderApp', ['ngRoute', 'ngResource'], function() {})
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "static/js/app/views/main.html",
                controller: "MainCtrl",
            })
            .when("/login", {
                templateUrl: "static/js/app/views/login.html",
                controller: "LoginCtrl"
            })
            .otherwise({
                redirectTo: '/login'
            })
    })
    .run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            console.log($rootScope.loggedUser);
            if ($rootScope.loggedUser == null) {
                // no logged user, we should be going to #login
                if (next.templateUrl == "static/js/app/views/login.html") {
                    // already going to #login, no redirect needed
                } else {
                    // not going to #login, we should redirect now
                    $location.path("/login");
                }
            } else  {
                if (next.templateUrl == "static/js/app/views/login.html") {
                    $location.path("/");
                }
            }
        })
    });