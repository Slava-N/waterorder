
from django.db import models
from django.contrib.auth.models import User
from django.utils import text

class Product(models.Model):
    WATER_TYPES = (
        ('Still', 'Still'),
        ('Sparkling', 'Sparkling'),
        ('Flavoured', 'Flavoured')
    )

    BOTTLE_TYPES = (
        ('Plastic', 'Plastic'),
        ('Glass', 'Glass')
    )

    name = models.CharField(max_length=50)
    volume = models.FloatField()
    sparkling = models.CharField(max_length=20, choices=WATER_TYPES)
    bottle = models.CharField(max_length=30, choices=BOTTLE_TYPES)
    price = models.IntegerField()
    units_in_box = models.IntegerField()
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return "{0}_{1}_{2}_{3}".format(self.name, self.volume, self.sparkling, self.bottle)

class Shipment(models.Model):

    STATUSES = (
        ('Act.', 'Active'),
        ('Canc.', 'Cancelled'),
        ('Done', 'Shipped')
    )

    user_originator = models.ForeignKey(User, on_delete=models.CASCADE)
    target_shipment_date = models.DateField()
    shipment_status = models.CharField(max_length=64, choices=STATUSES)

    def __str__(self):
        return "{0}_{1}".format(self.user_originator, self.target_shipment_date)

class OrderedItems(models.Model):
    ordering_customer = models.ForeignKey(User, on_delete=models.CASCADE)
    linked_shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE)
    order_product = models.ForeignKey(Product, on_delete=models.CASCADE)
    time_order = models.DateTimeField()
    ordered_quantity = models.IntegerField()

    def __str__(self):
        return "{0}_{1}_{2}_{3}".format(self.ordering_customer, self.linked_shipment, self.order_product, self.ordered_quantity)


