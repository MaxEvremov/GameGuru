from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('posts/',views.posts_list),
    path('post/<str:id>/',views.post_detail),
    path('post/patch/<str:id>',views.patch),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)