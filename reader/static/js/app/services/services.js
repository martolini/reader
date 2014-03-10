ReaderApp.factory('User', function($resource) {
    return $resource('api/users');
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
        username: null
    };
    return vars;
});