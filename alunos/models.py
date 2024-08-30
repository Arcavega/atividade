from django.db import models

# Create your models here.

class dados(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField()
    dn = models.DateField()
    endereço = models.CharField(max_length=200)
    cidade = models.CharField(max_length=200)
    curso = models.BooleanField(max_length=200)
    img = models.ImageField(upload_to="./Imagens/", null=True)
    

    def __str___(self):
        return self.nome


