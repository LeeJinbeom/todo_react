from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import Students, Scores
from django.contrib.auth import get_user_model
from account.models import User

class ScoresBasicSerializer(Serializer):
    name = serializers.CharField()
    math = serializers.IntegerField()
    science = serializers.IntegerField()
    english = serializers.IntegerField()

    def create(self, validated_data):
        Scores.objects.create()
        return Scores.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.math = validated_data.get('math', instance.math)
        instance.science = validated_data.get('science', instance.science)
        instance.english = validated_data.get('english', instance.english)
        instance.save()
        return instance


class StudentBasicSerializer(Serializer):
    name = serializers.CharField()
    address = serializers.CharField()
    email = serializers.CharField()

    def create(self, validated_data):
        Students.objects.create()
        return Students.objects.create(**validated_data)
        #return Students.objects.create(name=validated_data['name'], address=validated_data['address'])
    
    #student, data=request.data
    #inctance 원래데이터 (student)
    #validated_data 사람이 보내준 데이터 (data=request.data)
    #(원래데이터 <- 사람이 보내준 데이터) -> SAVE 
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.name)
        instance.email = validated_data.get('email', instance.name)
        instance.save()
        return instance


class UserSerializer(ModelSerializer):
    class Meta:
        model = User#get_user_model()
        fields = ['username','email','phone_number']

class StudentSerializer(ModelSerializer):

    reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    reg_user_email = serializers.ReadOnlyField(source='reg_user.email')
    reg_user = UserSerializer()

    test = serializers.SerializerMethodField()
    test2 = serializers.SerializerMethodField()

    def get_test(self, obj):
        return '내이름은 ' + obj.name

    def get_test2(self, obj):
        return '오호정'

    #reg_user = UserSerializer(read_only=True) #등록때 사용하지않겠다.
    # reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    # reg_user_email = serializers.ReadOnlyField(source='reg_user.email')

    # test = serializers.SerializerMethodField()

    # def get_test(self, obj):
    #     return obj.address + " (" + obj.name + ")"

    class Meta:
        model = Students
        fields = '__all__'



class ScoreSerializer(ModelSerializer):
    reg_date = serializers.DateField(format="%Y")
    data_sum = serializers.SerializerMethodField()

    def get_data_sum(self, obj):
        return obj.math + obj.science + obj.english

    class Meta:
        model = Scores
        fields = '__all__'