from django.shortcuts import render, get_object_or_404
from django.http import Http404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Students, Scores
from .serializers import StudentSerializer, ScoreSerializer
from rest_framework.response import Response


class StudentView(APIView):

    def get(self, request):
        qs = Students.objects.all()
        serializer = StudentSerializer(qs, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentDetailView(APIView):

    def get_object(self, pk):

        # return get_object_or_404(Students, pk=pk)

        try:
            student = Students.objects.get(pk=pk)
        except:
            raise Http404()
        return student

    def get(self, request, pk):
        student = self.get_object(pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)

    def put(self, request, pk):
        student = self.get_object(pk)

        print(request.data)

        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        student = self.get_object(pk)
        student.delete()
        return Response(status=204)


class ScoreView(APIView):

    def get(self, request):
        score = Scores.objects.all() #메모리
        serializer = ScoreSerializer(score, many=True) #메모리(Object) -> 텍스트
        return Response(serializer.data)

    def post(self, request):
        serializer = ScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)



class ScoreDetailView(APIView):

    def get_object(self, id):
        return get_object_or_404(Scores, id=id)

    def get(self, request, id):
        score = self.get_object(id)
        serializer = ScoreSerializer(score)
        return Response(serializer.data)

    def put(self, request, id):
        score = self.get_object(id)
        serializer = ScoreSerializer(score, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        score = self.get_object(id)
        score.delete()
        return Response(status=204)
        


# @api_view(['GET', 'POST'])
# def StudentView(request):

#     if request.method == 'GET':
#         qs = Students.objects.all()
#         serializer = StudentSerializer(qs, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         #직렬화 생성
#         serializer = StudentSerializer(data=request.data)
#         #vailidation 체크
#         if serializer.is_valid():
#             #저장
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def StudentDetailView(request, id):
    
#     qs = get_object_or_404(Students, pk=id)

#     #상세조회
#     if request.method == 'GET':
#         serializer = StudentSerializer(qs)
#         return Response(serializer.data)
#     #수정
#     elif request.method == 'PUT':
#         serializer = StudentSerializer(qs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     #삭제
#     elif request.method == 'DELETE':
#         qs.delete()
#         return Response(status=204)

        





# @api_view(['GET', 'POST'])
# def ScoreView(request):

#     if request.method == 'GET':
#         qs = Scores.objects.all() #리스트형식이 반환 []
#         serializer = ScoreSerializer(qs, many=True)
#         print(serializer.data)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         #직렬화 생성, 딕셔너리 비슷한형태
#         serializer = ScoreSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         Response(serializer.errors, status=400)

# @api_view(['GET', 'PUT', 'DELETE'])
# def ScoreDetailView(request, id):

#     score = get_object_or_404(Scores, pk=id)

#     if request.method == 'GET':
#         serializer = ScoreSerializer(score)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = ScoreSerializer(score, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
        
#     elif request.method == 'DELETE':
#         score.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

