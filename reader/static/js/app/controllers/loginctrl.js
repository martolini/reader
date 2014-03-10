ReaderApp.controller('LoginCtrl', function($scope, Auth, $http) {
    $scope.user = new Auth();
    $scope.login = function() {
        $http.post('api/login', $scope.user).success(function(data) {
            console.log(data);
        }).error(function(error) {
            console.log(error);
        });
        /*$scope.user.$save().then(function(result) {
            console.log(result);
        });*/
    };
});