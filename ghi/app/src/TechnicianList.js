import React, { useState, useEffect } from 'react'

export default function TechnicianList() {
    const [technicians, setTechnicians] = useState([])
    async function fetchTechnicians() {
        const response = await fetch('http://localhost:8080/api/technicians/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setTechnicians(data.technicians)
        }
    }
    useEffect(() => {
        fetchTechnicians()
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(technician => {
                    return (
                        <tr key={technician.id}>
                            <td> {technician.employee_id}</td>
                            <td> {technician.first_name}</td>
                            <td> {technician.last_name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
