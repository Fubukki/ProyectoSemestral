from django.urls import path
from .views import home, homeC

urlpatterns = [
    path('', home, name="home"),
    path('/homeC', homeC, name="homeC"),
]
