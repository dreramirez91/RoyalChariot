# Generated by Django 4.0.3 on 2023-06-06 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_automobilevo_vin_alter_automobilevo_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='created', max_length=10),
        ),
    ]
