from django.db import models

class User (models.Model):

  login = models.CharField(max_length=100, verbose_name='Логин')
  password = models.CharField(max_length=100, verbose_name='Пароль')
  forname = models.CharField(max_length=100, verbose_name='Имя')
  lastname = models.CharField(max_length=100, verbose_name='Фамилия')
  age = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Возраст')

  class Meta:
    verbose_name = 'Пользователь'
    verbose_name_plural = 'Пользователи'

  def __str__(self):
    return self.forname+" "+self.lastname
