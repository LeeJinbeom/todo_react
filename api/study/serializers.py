from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Students, Scores

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Students
        fields = ['name', 'address', 'email']

class ScoreSerializer(ModelSerializer):
    reg_date = serializers.DateField(format="%Y")
    class Meta:
        model = Scores
        fields = '__all__'