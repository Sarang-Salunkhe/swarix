from django.urls import path
from .views import search_music

urlpatterns = [
    path('songs/', search_music),
]