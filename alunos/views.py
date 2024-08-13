from django.shortcuts import render
from .models import dados
# Create your views here.

def perfil(request, *args, **kwargs):
    alunos = dados.objects.all()
    context = {
        'dados': alunos
    }
    return render(request, "index.html", context=context)