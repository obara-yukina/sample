from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import sys
from .models import User
import json

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def test(request, *args, **kwargs):
    return render(request, 'frontend/test.html')

def indexHome(request, *args, **kwargs):
    return render(request, 'frontend/home.html')

def home(request):
    returnParam = []
    try:
        if request.method == 'POST' and request.body:
            requestCollection = json.loads(request.body)
            print(requestCollection)
            requestCollection = requestCollection['params']
            result = User.objects.all().filter(user_code=requestCollection["employeeNo"], password=requestCollection["password"])
            returnParam = {"existsFlg": "true"}
            # result = User.objects.all().values('password')
            # returnParam = result[0]
            return JsonResponse(data=returnParam, safe=False)
            # return returnParam
    except Exception as e:
        return e
