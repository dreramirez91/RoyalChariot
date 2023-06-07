from .models import Salesperson, Customer, Sale, AutomobileVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold"
        ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
        ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number",
        ]


class SalesEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "salesperson",
        "customer",
        ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {"vin": o.automobile.vin}


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):

    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )


@require_http_methods(["DELETE", "GET"])
def api_show_salespeople(request, id):

    try:
        salesperson = Salesperson.objects.get(id=id)
    except Salesperson.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid salesperson id"},
            status=404,
        )

    if request.method == "GET":
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )

    else:
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request):

    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )


@require_http_methods(["DELETE", "GET"])
def api_show_customers(request, id):

    try:
        customer = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid customer id"},
            status=404,
        )

    if request.method == "GET":
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request):

    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin"},
                status=400,
            )

        try:
            employee_id = content["salesperson"]
            salesperson = Salesperson.objects.get(employee_id=employee_id)
            content["salesperson"] = salesperson

        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee id"},
                status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )

        sale = Sale.objects.create(**content)
        sale.automobile.sold = True
        sale.automobile.save()

        return JsonResponse(
            sale,
            encoder=SalesEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_show_sales(request, id):

    try:
        sale = Sale.objects.get(id=id)
    except Sale.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid sale id"},
            status=404,
        )

    if request.method == "GET":
        return JsonResponse(
            sale,
            encoder=SalesEncoder,
            safe=False,
        )

    else:
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_automobiles(request):

    if request.method == "GET":
        automobile = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobile": automobile},
            encoder=AutomobileVOEncoder,
        )
    else:
        content = json.loads(request.body)
        automobile = AutomobileVO.objects.create(**content)
        return JsonResponse(
            automobile,
            encoder=AutomobileVOEncoder,
            safe=False
        )
