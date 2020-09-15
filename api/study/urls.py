from django.urls import path, include
from . import views

urlpatterns = [
    path('students', views.StudentView.as_view()),
    path('students/<pk>', views.StudentDetailView.as_view()),
    path('scores', views.ScoreView.as_view()),
    path('scores/<id>', views.ScoreDetailView.as_view()),
    # path('students/', views.StudentView),
    # path('students/<id>', views.StudentDetailView),
    # path('scores/', views.ScoreView),
    # path('scores/<id>', views.ScoreDetailView)
]
