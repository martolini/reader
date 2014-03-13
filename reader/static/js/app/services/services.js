ReaderApp.factory('User', function($resource) {
    return $resource('api/users/:username', {
        username: '@username'
    });
});

ReaderApp.factory('ArticleUser', function($resource, $rootScope) {
    var username = $rootScope.loggedUser.username;
    console.log("Facot: " + username);
    return $resource('api/users/:username/articles', {
        username: username
    });
});

ReaderApp.factory('Article', function($resource) {
    return $resource('api/articles');
});

ReaderApp.factory('Auth', function($resource) {
    return $resource('api/login');
});