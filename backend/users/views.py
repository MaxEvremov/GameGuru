# from users.models import User
# from rest_framework.viewsets import ModelViewSet
# from users.serializers import UserSerializer


# class UsersView(ModelViewSet):
#   queryset = User.objects.all()
#   serializer_class = UserSerializer




# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from users.models import User
# from users.serializers import UserSerializer


# @api_view(['GET', 'POST'])
# def users_list(request, pk, format=None):
#     """
#     List all code snippets, or create a new snippet.
#     """
#     if request.method == 'GET':
#         users = User.objects.all()
#         serializer = UserSerializer
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def user_detail(request, pk):
#     """
#     Retrieve, update or delete a code snippet.
#     """
#     try:
#         user = User.objects.get(pk=pk)
#     except User.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = UserSerializer(user)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = UserSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from users.models import User
from users.serializers import UserAuthenticate, UserSerializer, changePasswordSerializer

@csrf_exempt
def users_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        print(data)
        serializer = UserSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def user_detail(request, login):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        user = User.objects.get(login=login)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=204)


@csrf_exempt
def user_auth(request):

  if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserAuthenticate(data=data)
        if serializer.is_valid():
            print('*******************user enter******************')
            print(serializer.data['login'])
            print(serializer.data['password'])
            print('*******************user enter******************')
            user = User.objects.get(login=serializer.data['login'])
            if user and serializer.data['password'] == user.password:
                getUser = UserSerializer(user)
                return JsonResponse(getUser.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def patch(request, login):
  user = User.objects.get(login=login)
  if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data,  partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)     


    # if request.method == 'POST':
          # return print(request)
          # data = JSONParser().parse(request)
          # serializer = UserSerializer(data=data)
          # print(serializer.data)
    # try:
    #     if request.method == 'POST':
    #       data = JSONParser().parse(request)
    #       serializer = UserSerializer(data=data)
    #       print(serializer.data)
    #       # login = serializer.data.login
    # except:
    #     return False
    
    # if request.method == 'POST':
    #     data = JSONParser().parse(request)
    #     serializer = UserSerializer(data=data)
    #     print(serializer.data)
    #     login = serializer.data.login

    #     if password == serializer.data.password:
    #       return JsonResponse(serializer.data, status=201)
