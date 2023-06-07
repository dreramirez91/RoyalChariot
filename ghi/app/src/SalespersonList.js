import React, { useState, useEffect } from 'react'

function SalespersonList() {
    const [salespeople, setSalespeople] = useState([])
    async function fetchSalespeople() {
        const response = await fetch('http://localhost:8090/api/salespeople/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setSalespeople(data.salespeople)
        }
    }
    useEffect(() => {
        fetchSalespeople()
    }, [])

    return (
        <>
        <h1 style={{ marginTop: '10px'}}>Salespeople</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
                {salespeople.map(salesperson => {
                    return (
                        <tr key={salesperson.id}>
                            <td> {salesperson.employee_id}</td>
                            <td> {salesperson.first_name}</td>
                            <td> {salesperson.last_name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default SalespersonList;
