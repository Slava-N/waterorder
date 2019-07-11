from django.shortcuts import render, redirect, HttpResponse
from .models import Product
from django.contrib.auth.forms import UserCreationForm
# from .forms import RegForm
from django.contrib.auth import authenticate, login

import json
# Create your views here.

# json.load




def show_items(request):
    template = 'no_auth_screen.html'
    context = {}
    if request.user.is_authenticated:
        template = 'products.html'

        product = Product.objects.all()
        context = {'products': product}
        # print((request.session.keys()))

        for key in request.session.keys():
            print(key +" "+ request.session[key])

    return render(request, template, context)



def signup(request):
    if request.method == 'POST':
        f = UserCreationForm(request.POST)
        if f.is_valid():
            f.save()
            new_user = authenticate(username=f.cleaned_data['username'],
                                    password=f.cleaned_data['password1'],
                                    )
            login(request, new_user)


            return redirect('home')
    else:
        f = UserCreationForm()

    return render(request, 'signup.html', {'form': f})


def create_order(request):
    # print(request)
    # name = request.POST.get('name', '')
    # email = request.POST.get('email', '')
    print(request.body)
    # received_json_data = json.loads(request.body)
    json_data = request.POST
    json_new_data = json.dumps(json_data)
    # json_data = json.loads(request.body)
    print(json_data)
    ordering_customer = request.user.username
    print("HIHIHI")
    print(json_new_data)
    ordering_customer = request.user.username
    linked_shipment = "admin_2019-06-20"
    # order_product =
    # time_order =
    # ordered_quantity =





    response = {"result": "OK", "greeting": 'hihi'}
    return HttpResponse((response))
