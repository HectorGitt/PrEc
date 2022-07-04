from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, "index.html")
def login(request):
    return render(request, "login.html")
def register(request):
    return render(request, "register.html")
def categories(request):
    return render(request, "categories.html")