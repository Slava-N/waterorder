# Generated by Django 2.1.5 on 2019-05-11 22:58

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ordermanagement', '0006_auto_20190511_2255'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderItems',
            new_name='OrderedItems',
        ),
    ]
