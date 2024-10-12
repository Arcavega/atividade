from django.shortcuts import render, redirect
from .models import *
from .forms import *
# Create your views here.

def perfil(request, *args, **kwargs):
    alunos = dados2.objects.all()
    context = {
        'dados2': alunos
    }
    return render(request, "dados.html", context=context)

def cadastro(request):

    if request.method == 'POST':
        form = formulario(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('dados')
    else:

        form = formulario()
    context = {
        'form': form
    }
    return render(request, 'forms.html', context)

def inicio(request):
    return render(request, 'inicio.html')

def cadastro2(request):
    return render(request, 'template/cadastro/index.html')

def catag(request):
    return render(request, 'template/catag_janela/index.html')