# Generated by Django 4.0.3 on 2023-06-06 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_remove_automobilevo_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='vin',
            field=models.CharField(blank=True, max_length=17, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='sold',
            field=models.BooleanField(default=False),
        ),
    ]
