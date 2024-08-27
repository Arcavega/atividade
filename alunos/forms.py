from django import forms
from .models import *

class formulario(forms.ModelForm):
    class Meta:
        model = dados
        fields = ('nome', 'email', 'dn')
