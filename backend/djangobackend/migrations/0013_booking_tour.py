# Generated by Django 4.2.3 on 2023-09-29 11:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djangobackend', '0012_remove_booking_tour'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='tour',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='djangobackend.tour'),
        ),
    ]
