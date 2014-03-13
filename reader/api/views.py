from django.shortcuts import render
from .models import User
from django.contrib.auth import authenticate, login, logout
from .forms import AuthenticateForm
from django.http import HttpResponse
import json

def index(request):
	return render(request, 'index.html')

def login_view(request):
	if request.body:
		data = json.loads(request.body)
		user = authenticate(username=data["username"], password=data["password"])
		if user is not None:
			return HttpResponse(json.dumps({'username': user.username, 'full_name': user.get_full_name()}), mimetype='application/json')
		else:
			return HttpResponse(json.dumps({"ERROR": "Wrong username/pass"}))
	return HttpResponse(json.dumps({"ERROR": "Only POST allowed"}))


def logout_view(request):
	logout(request)
	return json.dumps({'status': 200})