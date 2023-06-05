from django.contrib import admin
from .api_models import AutomobileVO, Technician, Appointment

admin.site.register(AutomobileVO)
admin.site.register(Technician)
admin.site.register(Appointment)
