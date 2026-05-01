from django.urls import path
from .views import search_music

urlpatterns = [
    path('search/', search_music),
]