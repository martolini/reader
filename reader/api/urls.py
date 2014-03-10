from django.conf.urls import patterns, url, include

from .api import UserList, UserDetail
from .api import ArticleList, ArticleDetail, UserArticleList

user_urls = patterns('',
    url(r'^/(?P<username>[0-9a-zA-Z_-]+)/articles$', UserArticleList.as_view(), name='userarticle-list'),
    url(r'^/(?P<username>[0-9a-zA-Z_-]+)$', UserDetail.as_view(), name='user-detail'),
    url(r'^$', UserList.as_view(), name='user-list')
)

article_urls = patterns('',
    url(r'^/(?P<pk>\d+)$', ArticleDetail.as_view(), name='article-detail'),
    url(r'^$', ArticleList.as_view(), name='article-list')
)

urlpatterns = patterns('',
    url(r'^users', include(user_urls)),
    url(r'^articles', include(article_urls)),
)

urlpatterns += patterns('reader.api.views',
	url(r'^login/$', 'login_view'),
)