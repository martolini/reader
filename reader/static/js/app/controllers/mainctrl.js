ReaderApp.controller('MainCtrl', function($rootScope, $scope, User, ArticleUser, Article, $http, Auth) {
    $scope.articles = ArticleUser.query();
    console.log($scope.articles);
    $scope.article = new Article();
    $scope.addLink = function() {
        $scope.article.$save().then(function(result) {
            $scope.articles.push(result);
        }).then(function() {
            $scope.article = new Article();
        });
    };
});