# Generated by Django 4.0.3 on 2023-06-06 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0010_alter_appointment_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, unique=True),
        ),
    ]
