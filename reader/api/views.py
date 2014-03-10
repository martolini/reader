from django.shortcuts import render
from .models import User
from django.contrib.auth import authenticate, login, logout
from .forms import AuthenticateForm
import json

def index(request):
	return render(request, 'index.html')

def login(request):
	user = None
	if request.POST:
		form = AuthenticateForm(request.POST)
		if form.is_valid():
			login(request, form.get_user())
			user = form.get_user()
	return json.dumps({'user': user})

def logout_view(request):
	logout(request)
	return json.dumps({'status': 200})