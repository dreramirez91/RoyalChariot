import React, { useState, useEffect } from 'react'

export default function AppointmentList() {
    const [appointments, setAppointments] = useState([])
    async function fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAppointments(data.appointments)
        }
    }
    useEffect(() => {
        fetchAppointments()
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">VIN</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">Date and Time</th>
                    <th scope="col">Technician</th>
                    <th scope="col">Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td> {appointment.customer}</td>
                            <td> {appointment.date_time}</td>
                            <td> {`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                            <td> {appointment.reason}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
