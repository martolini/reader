from django.shortcuts import render
from .models import User
from django.contrib.auth import authenticate, login, logout
from .forms import AuthenticateForm
from django.http import HttpResponse
import json

def index(request):
	return render(request, 'index.html')

def login_view(request, object):
	user = None
	if request.POST:
		form = AuthenticateForm(request.POST)
		if form.is_valid():
			login(request, form.get_user())
			user = form.get_user()
	output = json.dumps({'user': user})
	return HttpResponse(output, mimetype='application/json')

def logout_view(request):
	logout(request)
	return json.dumps({'status': 200})