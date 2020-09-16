from django.shortcuts import render, get_object_or_404
from django.http import Http404
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.decorators import api_view, action
from rest_framework.views import APIView
from .models import Students, Scores
from .serializers import StudentBasicSerializer, ScoresBasicSerializer, StudentSerializer, ScoreSerializer
from rest_framework.response import Response


@api_view(['GET','POST'])
def ScoreBasicView(request):
    if request.method == 'GET':
        scores = Scores.objects.all()
        print('1')
        serializer = ScoresBasicSerializer(scores, many=True)
        print('2')
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ScoresBasicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET','POST'])
def StudentBasicView(request):
    if request.method == 'GET':
        student = Students.objects.all()
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            #가공
            serializer.save(memo="이건테스트입니다.")
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['PUT'])
def StudentDetailBasicView(request, pk):
    if request.method == 'PUT':
        student = Students.objects.get(pk=pk)
        #student 원래데이터
        #request.data 사람이 보내준 데이터
        #(원래데이터 <- 사람이 보내준 데이터) -> SAVE 
        serializer = StudentBasicSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)





class StudentView(ModelViewSet):

    queryset = Students.objects.all()
    serializer_class = StudentSerializer

    # def get_queryset(self):
    #     qs = super().get_queryset()
    #     name = self.request.query_params.get('name')
    #     math = self.request.query_params.get('math')
    #     science = self.request.query_params.get('science')
    #     if name:
    #         qs = qs.filter(name=name)
    #     if math:
    #         qs = qs.filter(math__gt=math)
    #     return qs

    # #기본URL/incheon
    # @action(detail=False, methods=['GET'])
    # def incheon(self, requset):
    #     qs = self.get_queryset().filter(address__contains='인천') # like '%인천%'
    #     serializer = self.get_serializer(qs, many=True)
    #     return Response(serializer.data)

    # #기본URL/pk/init
    # @action(detail=True, methods=['PUT'])
    # def init(self, requset, pk):
    #     instance = self.get_object()
    #     instance.address = ""
    #     instance.email = ""
    #     instance.save(update_fields=['address','email'])
    #     serializer = self.get_serializer(instance)
    #     return Response(serializer.data)


class ScoreView(ModelViewSet):
    queryset = Scores.objects.all() #전체데이터를 조회하는
    serializer_class = ScoreSerializer

    # 오버라이딩
    def get_queryset(self):
        #Scores.objects.all()
        qs = super().get_queryset() # SELECT * FROM scores

        name = self.request.query_params.get('name')
        math = self.request.query_params.get('math')
        science = self.request.query_params.get('science')
        english = self.request.query_params.get('english')
        order = self.request.query_params.get('order')

        if name:
            qs = qs.filter(name=name) # SELECT * FROM scores WHERE name = name
        if math:
            qs = qs.filter(math__gte=math)
        if science:
            qs = qs.filter(math__gte=science)
        if english:
            qs = qs.filter(math__gte=english)
        if order:
            qs = qs.order_by(order)

        return qs

    #PUT, DETAIL GET, DELETE (PK)
    #LIST, LIST 0, 1, >=
    @action(detail=False, methods=['GET'])
    def top(self, request):
        qs = self.get_queryset().filter(math__gte=80, english__gte=80, science__gte=80)
        #ScoreSerializer
        serializer = self.get_serializer(qs, many=True)
        return Response(serializer.data)





# class StudentView(APIView):

#     def get(self, request):
#         qs = Students.objects.all()
#         serializer = StudentSerializer(qs, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class StudentDetailView(APIView):

#     def get_object(self, pk):

#         # return get_object_or_404(Students, pk=pk)

#         try:
#             student = Students.objects.get(pk=pk)
#         except:
#             raise Http404()
#         return student

#     def get(self, request, pk):
#         student = self.get_object(pk)
#         serializer = StudentSerializer(student)
#         return Response(serializer.data)

#     def put(self, request, pk):
#         student = self.get_object(pk)

#         print(request.data)

#         serializer = StudentSerializer(student, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

#     def delete(self, request, pk):
#         student = self.get_object(pk)
#         student.delete()
#         return Response(status=204)


# class ScoreView(APIView):

#     def get(self, request):
#         score = Scores.objects.all() #메모리
#         serializer = ScoreSerializer(score, many=True) #메모리(Object) -> 텍스트
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = ScoreSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)



# class ScoreDetailView(APIView):

#     def get_object(self, id):
#         return get_object_or_404(Scores, id=id)

#     def get(self, request, id):
#         score = self.get_object(id)
#         serializer = ScoreSerializer(score)
#         return Response(serializer.data)

#     def put(self, request, id):
#         score = self.get_object(id)
#         serializer = ScoreSerializer(score, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

#     def delete(self, request, id):
#         score = self.get_object(id)
#         score.delete()
#         return Response(status=204)
        


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

