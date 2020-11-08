from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home(req):
    return render(req,"index.html",{})


def pdf_view(request):
    with open('./static/pdf/moncv.pdf', 'rb') as pdf:
        response = HttpResponse(pdf.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'inline;filename=cv.pdf'
        return response
    pdf.closed

def dessins(req):
    return render(req,"dessins.html",{})