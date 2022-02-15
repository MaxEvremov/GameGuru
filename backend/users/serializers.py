from rest_framework.serializers import ModelSerializer
from users.models import User



class UserSerializer(ModelSerializer):

  class Meta:
    model = User
    fields = ['login','password', 'forname', 'lastname', 'age']

  def create(self, validated_data):

        return User.objects.create(**validated_data)

  def update(self, instance, validated_data):

        instance.login = validated_data.get('login', instance.login)
        instance.password = validated_data.get('password',instance.password)
        instance.forname = validated_data.get('forname', instance.forname)
        instance.lastname = validated_data.get('lastname', instance.lastname)
        instance.age = validated_data.get('age', instance.age)
        instance.save()

        return instance

class UserAuthenticate(ModelSerializer):

  class Meta:
    model = User
    fields = ['login', 'password']

class changePasswordSerializer(ModelSerializer):

  class Meta:
    model = User
    fields = ['password']