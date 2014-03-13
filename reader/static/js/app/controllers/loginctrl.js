ReaderApp.controller('LoginCtrl', function($scope, Auth, $http, $rootScope) {
    $scope.user = new Auth();
    $scope.login = function() {
        $http.post('api/login', $scope.user).success(function(loggedUser) {
            $rootScope.loggedUser = loggedUser;
            console.log(loggedUser);
        }).error(function(error) {});
        /*$scope.user.$save().then(function(result) {
            console.log(result);
        });*/
    };
});