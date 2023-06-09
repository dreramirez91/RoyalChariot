# CarCar

Team:

* Dre - Services
* Cougan - Sales

## Design

## Service microservice

The service microservice contains three main models, AutomobileVO, Technician, and Appointment. In order to tell whether a customer is a VIP, we make an API call to the Inventory microservice to determine whether the VIN of the car-to-be-serviced is also found in the inventory. If so, that means the car must have been sold by CarCar and that the customer is a VIP. 

## Sales microservice

The sales microservice contains four main models, AutomobileVO, Salesperson, Customer, and Sale. Sale contains foreign keys to automobile, salesperson, and customer.
