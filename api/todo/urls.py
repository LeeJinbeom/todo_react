from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('todogroup', views.TodoGroupView)
router.register('todo', views.TodoView)
router.register('favouritegroup', views.FavouriteGroupView)
router.register('favourite', views.FavouriteView)

urlpatterns = [
    path('', include(router.urls)),
]