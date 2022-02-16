from rest_framework.serializers import ModelSerializer
from blog.models import Post
from users.serializers import authorSerializer


class PostSerializer(ModelSerializer):
  author = authorSerializer(many=False)
  class Meta:
    model = Post
    fields = ['id', 'title','slug','author','body','publish','created','updated','status']

  def create(self, validated_data):

        return Post.objects.create(**validated_data)

  def update(self, instance, validated_data):

        instance.id = validated_data.get('id',instance.id)
        instance.title = validated_data.get('title',instance.title)
        instance.slug = validated_data.get('slug', instance.slug)
        instance.author = validated_data.get('author', instance.author)
        instance.body = validated_data.get('body', instance.body)
        instance.publish = validated_data.get('publish', instance.publish)
        instance.created = validated_data.get('created', instance.created)
        instance.updated = validated_data.get('updated', instance.updated)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance