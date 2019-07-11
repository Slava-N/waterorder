# Generated by Django 2.1.5 on 2019-05-07 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('volume', models.FloatField()),
                ('sparkling', models.BooleanField()),
                ('bottle', models.CharField(max_length=30)),
                ('price', models.IntegerField()),
                ('units_in_box', models.IntegerField()),
                ('image', models.TextField()),
            ],
        ),
    ]
