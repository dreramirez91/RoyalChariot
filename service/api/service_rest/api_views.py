from django.shortcuts import render, get_object_or_404
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
    properties = ["id", "date_time", "reason", "status", "vin", "customer", "technician"]
    
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
        
        
def api_delete_technician(request, id):
    if request.method == "DELETE":
        technician = get_object_or_404(Technician, id=id)
        technician.delete()
        return JsonResponse(
            {"message": f"The technician at id {id} has been deleted"},
            status=200
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

def api_delete_appointment(request, id):
    if request.method == "DELETE":
        appointment = get_object_or_404(Appointment, id=id)
        appointment.delete()
        return JsonResponse(
            {"message": f"The appointment at id {id} has been deleted"},
            status=200
        )


def api_cancel_appointment(request, id):
    if request.method == "PUT":
        appointment = get_object_or_404(Appointment, id=id)
        appointment.status = "canceled"
        appointment.save()
        return JsonResponse(
            {"message": f"{appointment.customer}'s appointment has been canceled"},
            status=200
        )
    
def api_finish_appointment(request, id):
    if request.method == "PUT":
        appointment = get_object_or_404(Appointment, id=id)
        appointment.status = "finished"
        appointment.save()
        return JsonResponse(
            {"message": f"{appointment.customer}'s appointment has been finished"},
            status=200
        )
