ReaderApp.controller('AppCtrl', function($scope, $rootScope) {
    $scope.initialize = function(user) {
        if (user !== "AnonymousUser") {
            $rootScope.loggedUser = {};
            $rootScope.loggedUser.username = user;
        }
    };
});