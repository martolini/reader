ReaderApp.controller('MainCtrl', function($scope, User, ArticleUser, Article, $http) {
    $scope.articles = ArticleUser.query();

    $scope.article = new Article();
    $scope.addLink = function() {
        $scope.article.$save().then(function(result) {
            $scope.articles.push(result);
        }).then(function() {
            $scope.article = new Article();
        });
    };
});