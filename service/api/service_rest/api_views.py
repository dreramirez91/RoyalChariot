from django.shortcuts import render
from .models import Technician, AutomobileVO, Appointment
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]
    
    
class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id"]
    
    
class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "vin", "customer"]
    
    encoders = {
        "technician": TechnicianListEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):

    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):

    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "That technician does not work here"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )
