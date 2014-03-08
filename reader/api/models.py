from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
	followers = models.ManyToManyField('self', related_name='followees', symmetrical=False)


class Article(models.Model):
	author = models.ForeignKey(User, related_name='articles')
	url = models.CharField(max_length=200)

	def __str__(self):
		return self.url

