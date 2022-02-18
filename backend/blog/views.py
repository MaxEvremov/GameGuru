from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from blog.models import Post
from blog.serializers import PostSerializer




@csrf_exempt
def posts_list(request):

    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        print(data)
        serializer = PostSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def post_detail(request, id):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)

@csrf_exempt
def patch(request, login):
  post = Post.objects.get(login=login)
  if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostSerializer(post, data=data,  partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)   

  elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=204)  
