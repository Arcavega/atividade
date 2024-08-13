from django.db import models

# Create your models here.

class dados(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField()
    cpf = models.IntegerField()
    dn = models.DateField()

    def __str___(self):
        return dados


