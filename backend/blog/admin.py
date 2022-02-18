from django.contrib import admin
from .models import Post
from .models import Image

admin.site.register(Image)


class UserAdmin(admin.ModelAdmin):
    list_display = ['tags','title','slug','author','body','publish','created','updated','status']
admin.site.register(Post,UserAdmin)