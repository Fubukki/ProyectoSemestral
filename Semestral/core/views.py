from django.shortcuts import render

def home(request):
    return render(request, 'core/Menu.html')

def homeC(request):
    return render(request, 'core/MenuC.html')
