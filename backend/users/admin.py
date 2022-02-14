from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ['login', 'password', 'forname', 'lastname', 'age']
admin.site.register(User,UserAdmin)