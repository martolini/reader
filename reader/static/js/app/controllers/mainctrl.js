ReaderApp.controller('MainCtrl', function($scope, User, Article, GlobalService) {
    $scope.globals = GlobalService;
    $scope.articles = Article.query();

    $scope.article = new Article();

    $scope.addLink = function() {
        $scope.user = new User();
        $scope.user.username = "tintin";
        $scope.user.$save();
    };
});