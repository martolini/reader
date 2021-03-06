from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('reader.api.urls')),
    url(r'^$', 'reader.api.views.index', name='index'),
)