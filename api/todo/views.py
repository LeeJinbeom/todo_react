from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import TodoGroup, Todo, FavouriteGroup, Favourite
from .serializers import TodoGroupSerializer, TodoSerializer, FavouriteGroupSerializer, FavouriteSerializer

# Create your views here.

@api_view(['GET'])
def TodoAllSelectView(request):
    if request.method == 'GET':
        todo = Todo.objects.all()
        pending = TodoSerializer(todo.filter(status="pending"), many=True)
        inprogress = TodoSerializer(todo.filter(status="inprogress"), many=True)
        end = TodoSerializer(todo.filter(status="end"), many=True)
        return Response({
            "inprogress": inprogress.data,
            "pending": pending.data,
            "end": end.data
        })
  
class TodoGroupView(ModelViewSet):
    queryset = TodoGroup.objects.all()
    serializer_class = TodoGroupSerializer

class TodoView(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    
    def get_queryset(self):
        qs = super().get_queryset()
        status = self.request.query_params.get('status')
        if status:
            qs = qs.filter(status=status)
        return qs

class FavouriteGroupView(ModelViewSet):
    queryset = FavouriteGroup.objects.all()
    serializer_class = FavouriteGroupSerializer

class FavouriteView(ModelViewSet):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer