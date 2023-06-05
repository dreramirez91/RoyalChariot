from .models import Salesperson, Customer, Sale, AutomobileVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json

# Create your views here.
class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold"
        ]

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
          "id",
          "first_name",
          "last_name",
          "employee_id",
    ]


@require_http_methods(["GET", "POST"])
def list_salespersons(request):

     if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalespersonListEncoder,
        )
