from django.urls import path
from blog import views

urlpatterns = [
    path('posts/',views.posts_list),
    path('post/<str:id>/',views.post_detail),
    path('post/patch/<str:id>',views.patch)
]