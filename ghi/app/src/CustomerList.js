import React, { useState, useEffect } from 'react'

function CustomerList() {
    const [customers, setCustomers] = useState([])
    async function fetchCustomer() {
        const response = await fetch('http://localhost:8090/api/customers/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setCustomers(data.customers)
        }
    }
    useEffect(() => {
        fetchCustomer()
    }, [])

    return (
        <>
        <h1 style={{ marginTop: '10px'}}>Customers</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => {
                    return (
                        <tr key={customer.id}>
                            <td> {customer.first_name}</td>
                            <td> {customer.last_name}</td>
                            <td> {customer.phone_number}</td>
                            <td> {customer.address}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default CustomerList;
