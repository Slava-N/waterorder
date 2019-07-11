from django.contrib import admin

# Register your models here.
from .models import Product, Shipment, OrderedItems

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

@admin.register(Shipment)
class Shipment(admin.ModelAdmin):
    pass

@admin.register(OrderedItems)
class OrderedItems(admin.ModelAdmin):
    pass