from rest_framework import generics, permissions


from .serializers import UserSerializer, ArticleSerializer
from .models import User, Article
from .permissions import ArticleAuthorCanEditPermission


class UserList(generics.ListCreateAPIView):
    model = User
    serializer_class = UserSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class UserDetail(generics.RetrieveAPIView):
    model = User
    serializer_class = UserSerializer
    lookup_field = 'username'


class ArticleMixin(object):
    model = Article
    serializer_class = ArticleSerializer
    permission_classes = [
        ArticleAuthorCanEditPermission
    ]
    
    def pre_save(self, obj):
        print "should save"
        """Force author to the current user on save"""
        obj.author = self.request.user
        return super(ArticleMixin, self).pre_save(obj)


class ArticleList(ArticleMixin, generics.ListCreateAPIView):
    pass


class ArticleDetail(ArticleMixin, generics.RetrieveUpdateDestroyAPIView):
    pass


class UserArticleList(generics.ListAPIView):
    model = Article
    serializer_class = ArticleSerializer

    def get_queryset(self):
        queryset = super(UserArticleList, self).get_queryset()
        return queryset.filter(author__username=self.kwargs.get('username'))
        