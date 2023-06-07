from django.urls import path
from .api_views import api_list_salespeople, api_show_salespeople, api_list_customers, api_show_customers, api_list_sales, api_show_sales, api_list_automobiles

urlpatterns = [
    path("salespeople/",
         api_list_salespeople,
         name="api_list_salespeople"),
    path("salespeople/<int:id>/",
         api_show_salespeople,
         name="api_show_salespeople"),
    path("customers/",
         api_list_customers,
         name="api_list_customers"),
    path("customers/<int:id>/",
         api_show_customers,
         name="api_show_customer"),
    path("sales/",
         api_list_sales,
         name="api_list_sales"),
    path("sales/<int:id>/",
         api_show_sales,
         name="api_show_sales",
         ),
    path("automobiles/",
         api_list_automobiles,
         name="api_list_automobiles",
         ),
]
