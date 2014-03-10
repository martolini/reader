ReaderApp.controller('AppCtrl', function($scope, GlobalService) {
    $scope.globals = GlobalService;
    $scope.initialize = function(user) {
        if (user !== "AnonymousUser") $scope.globals.username = user;
    };
});