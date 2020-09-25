from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from .models import TodoGroup, Todo, FavouriteGroup, Favourite
from .serializers import TodoGroupSerializer, TodoSerializer, FavouriteGroupSerializer, FavouriteSerializer

# Create your views here.
class TodoGroupView(ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer

class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class FavouriteGroupView(ModelViewSet):
    queryset = FavouriteGroup.objects.all()
    serializer_class = FavouriteGroupSerializer

class FavouriteView(ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer