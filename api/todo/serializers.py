from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import TodoGroup, Todo, FavouriteGroup, Favourite

class TodoGroupSerializer(ModelSerializer):
    class Meta:
        model = TodoGroup
        fields = '__all__'

class TodoSerializer(ModelSerializer):

    group_name = serializers.ReadOnlyField(source='group.name')

    class Meta:
        model = Todo
        fields = '__all__'

class FavouriteGroupSerializer(ModelSerializer):
    class Meta:
        model = FavouriteGroup
        fields = '__all__'

class FavouriteSerializer(ModelSerializer):
    class Meta:
        model = Favourite
        fields = '__all__'