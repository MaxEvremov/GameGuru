from rest_framework.serializers import ModelSerializer
# from rest_framework import serializers
from users.models import User



class UserSerializer(ModelSerializer):

# class UserSerializer(serializers.Serializer):

#   login = serializers.CharField(required=False, allow_blank=True, max_length=100)
#   password = serializers.CharField(required=False, allow_blank=True, max_length=100)
#   forname = serializers.CharField(required=False, allow_blank=True, max_length=100)
#   lastname = serializers.CharField(required=False, allow_blank=True, max_length=100)
#   age = serializers.CharField(required=False, allow_blank=True, max_length=100)

  class Meta:
    model = User
    fields = ['login', 'password', 'forname', 'lastname', 'age']

  def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

  def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance