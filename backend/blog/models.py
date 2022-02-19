from distutils.command.upload import upload
from django.db import models
from django.forms import ImageField
from django.utils import timezone
from users.models import User
from django.contrib import admin
from taggit.managers import TaggableManager
# from versatileimagefield.fields import VersatileImageField, PPOIField


class Image(models.Model):
    name = models.CharField(max_length=255)
    image = ImageField()
   
    def __str__(self):
        return self.name


# class Image(models.Model):
#     name = models.CharField(max_length=255)
#     image = VersatileImageField(
#         'Image',
#         upload_to='static/',
#         ppoi_field='image_ppoi'
#     )
#     image_ppoi = PPOIField()

#     def __str__(self):
#         return self.name

class Post(models.Model):


  STATUS_CHOICES = (
    ('draft', 'Draft'),
    ('published', 'Published'),
  )
  id = models.CharField(max_length=250, primary_key=True)
  tags = TaggableManager()
  title = models.CharField(max_length=250)
  image = models.FileField(upload_to = 'static/', null=True)
  slug = models.SlugField(max_length=250, unique_for_date='publish')
  author = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
  body = models.TextField()
  publish = models.DateTimeField(default=timezone.now)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

  class Meta:
    ordering = ('-publish',)
    verbose_name = 'Публикация'
    verbose_name_plural = 'Публикации'

  def __str__(self):
    return self.title


class PostAdmin(admin.ModelAdmin):
  list_display = ('id','title', 'slug', 'author', 'publish', 'status')
  list_filter = ('id', 'status', 'created', 'publish', 'author')
  search_fields = ('title', 'body')
  prepopulated_fields = {'slug': ('title',)}
  raw_id_fields = ('author',)
  date_hierarchy = 'publish'
  ordering = ['status', 'publish']


class Comment(models.Model):
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=80, verbose_name='')
    email = models.EmailField(verbose_name='')
    body = models.TextField(verbose_name='')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ('created',)
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def __str__(self):
        return 'Comment by {} on {}'.format(self.name, self.post)
