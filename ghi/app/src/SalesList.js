import React, { useState, useEffect } from 'react'

function SalesList() {
    const [sales, setSales] = useState([])

    async function fetchSales() {
        const response = await fetch('http://localhost:8090/api/sales/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setSales(data.sales)
        }
    }
    useEffect(() => {
        fetchSales()
    }, [])

    return (
        <>
        <h1 style={{ marginTop: '10px'}}>Salespeople</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Salesperson Employee ID</th>
                    <th scope="col">Salesperson Name</th>
                    <th scope="col">Customer</th>
                    <th scope="col">VIN</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => {
                    return (
                        <tr key={sale.id}>
                            <td> {sale.salesperson.employee_id}</td>
                            <td> {`${sale.salesperson.first_name} ${sale.salesperson.last_name}`} </td>
                            <td> {`${sale.customer.first_name} ${sale.customer.last_name}`} </td>
                            <td> {sale.vin}</td>
                            <td> {sale.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default SalesList;
