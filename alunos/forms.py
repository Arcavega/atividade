from django import forms
from .models import *

class formulario(forms.ModelForm):
    class Meta:
        model = dados
        fields = ('nome', 'endereço', 'cidade', 'email', 'curso')

        widgets = {
            'nome': forms.TextInput(attrs={'class': 'form-control'}),
            'endereço': forms.TextInput(attrs={'class': 'form-control'}),
            'cidade': forms.Select(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'curso': forms.Select(attrs={'class': 'form-control'}),
        }
