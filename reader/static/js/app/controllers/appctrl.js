ReaderApp.controller('AppCtrl', function($scope, GlobalService, $rootScope) {
    $scope.globals = GlobalService;
    $scope.initialize = function(user) {
        if (user !== "AnonymousUser") {
            $scope.globals.username = user;
            $scope.globals.is_authenticated = true;
            $rootScope.loggedUser = user;
        }
    };
});