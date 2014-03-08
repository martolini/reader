from rest_framework import serializers

from .models import User, Article

class UserSerializer(serializers.ModelSerializer):
	articles = serializers.HyperlinkedIdentityField('articles', view_name='userarticle-list', lookup_field='username')

	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'articles')

class ArticleSerializer(serializers.ModelSerializer):
	author = UserSerializer(required=False)

	def get_validation_exclusions(self):
		exclusions = super(ArticleSerializer, self).get_validation_exclusions()
		return exclusions + ['author']

	class Meta:
		model = Article

