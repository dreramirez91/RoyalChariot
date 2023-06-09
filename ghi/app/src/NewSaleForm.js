import React, { useState, useEffect } from 'react'

function NewSaleForm() {
    const [customers, setCustomers] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [vins, setVins] = useState([])

    const [price, setPrice] = useState('')
    const [vin, setVin] = useState('')
    const [salesperson, setSalesperson] = useState('')
    const [customer, setCustomer] = useState('')

    const fetchVins = async () => {
        const vinsUrl = 'http://localhost:8090/api/automobiles/';
        const response = await fetch(vinsUrl);
        if (response.ok) {
          const data = await response.json();
          setVins(data.automobile);
        }
      }

    const fetchCustomers = async () => {
        const customersUrl = 'http://localhost:8090/api/customers/';
        const response = await fetch(customersUrl);
        if (response.ok) {
          const data = await response.json();
          setCustomers(data.customers);
        }
      }

    const fetchSalespeople = async () => {
        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(salespeopleUrl);
        if (response.ok) {
          const data = await response.json();
          setSalespeople(data.salespeople);
        }
      }

    async function handleSubmit(e) {
        e.preventDefault()

        const data = {}
        data.price = price
        data.automobile = vin
        data.salesperson = salesperson
        data.customer = customer
        console.log(data);

        const createSaleUrl = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const automobileSold = async () => {
          const fetchOptions = {
              method: "PUT",
              body: JSON.stringify({ "sold": true }),
          };
          const response = await fetch(
              `http://localhost:8100/api/automobiles/${vin}/`,
              fetchOptions
          );
          if (response.ok) {
              const data = await response.json();
          }
        };

        const response = await fetch(createSaleUrl, fetchConfig)
        if (response.ok) {
            const newSale = await response.json()
            console.log(newSale)
            await automobileSold()
            setPrice('')
            setVin('')
            setSalesperson('')
            setCustomer('')
            fetchVins()
        }
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
      }

      const handleVinChange = (e) => {
        setVin(e.target.value);
      }

      const handleSalespersonChange = (e) => {
        setSalesperson(e.target.value);
      }

      const handleCustomerChange = (e) => {
        setCustomer(e.target.value);
      }


      useEffect(()=> {
        fetchCustomers();
        fetchSalespeople();
        fetchVins();
      }, [])

      const unsoldVins = vins.filter((vin) => !vin.sold);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-new-sale-form">
                        <div className="mb-3">
                            <select onChange={handleVinChange} value={vin} required name="vin" className="form-select" id="vin">
                                <option value="">Choose an automobile VIN</option>
                                {unsoldVins.map(vin => {
                                return (
                                    <option key={vin} value={vin.vin}>{vin.vin}</option>
                                )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleSalespersonChange} value={salesperson} required name="salesperson" className="form-select" id="salesperson">
                                <option value="">Choose a salesperson</option>
                                {salespeople.map(salesperson => {
                                return (
                                    <option key={salesperson.employee_id} value={salesperson.employee_id}>{`${salesperson.first_name} ${salesperson.last_name}`}</option>
                                )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} value={customer} required name="customer" className="form-select" id="customer">
                                <option value="">Choose a customer</option>
                                {customers.map(customer => {
                                return (
                                    <option key={customer.id} value={customer.id}>{`${customer.first_name} ${customer.last_name}`}</option>
                                )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={price} onChange={handlePriceChange} placeholder="Price" required type="text" name="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewSaleForm;
