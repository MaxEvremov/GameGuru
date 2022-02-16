from django.contrib import admin
from .models import Post


class UserAdmin(admin.ModelAdmin):
    list_display = ['tags','title','slug','author','body','publish','created','updated','status']
admin.site.register(Post,UserAdmin)