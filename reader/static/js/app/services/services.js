ReaderApp.factory('User', function($resource) {
    return $resource('api/users/:username', {
        username: '@username'
    });
});

ReaderApp.factory('ArticleUser', function($resource, GlobalService) {
    var username = GlobalService.username;
    return $resource('api/users/:username/articles', {
        username: username
    });
});

ReaderApp.factory('Article', function($resource) {
    return $resource('api/articles');
});

ReaderApp.factory('GlobalService', function() {
    var vars = {
        is_authenticated: false,
        username: null
    };
    return vars;
});

ReaderApp.factory('Auth', function($resource) {
    return $resource('api/login');
});