from django.urls import path
from users import views

urlpatterns = [
    path('users/', views.users_list),
    path('users/<str:login>/', views.user_detail),
    path('auth/',views.user_auth),
    path('patch/<str:login>/', views.patch)
]