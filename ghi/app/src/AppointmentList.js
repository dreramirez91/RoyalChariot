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

    async function cancelAppointment(id) {
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel`
        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(cancelUrl, fetchConfig)
        console.log(response)
        if (response.ok) {
            const response = await fetch('http://localhost:8080/api/appointments/')
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setAppointments(data.appointments)
            }
        }
    }

    async function finishAppointment(id) {
        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish`
        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(finishUrl, fetchConfig)
        console.log(response)
        if (response.ok) {
            const response = await fetch('http://localhost:8080/api/appointments/')
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setAppointments(data.appointments)
            }
        }
    }

    return (
        <>
        <h1 style={{ marginTop: '10px '}}>Service Appointments</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">VIN</th>
                    <th scope="col">Is VIP?</th>
                    <th scope="col">Customer name</th>
                    <th scope="col">Date and Time</th>
                    <th scope="col">Technician</th>
                    <th scope="col">Reason</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    if (appointment.status === "created") {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{String(appointment.automobile.sold)}</td>
                                <td> {appointment.customer}</td>
                                <td> {appointment.date_time}</td>
                                <td> {`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                                <td> {appointment.reason}</td>
                                <td><button className="btn btn-danger" onClick={() => cancelAppointment(appointment.id)}>Cancel</button><button className="btn btn-success" onClick={() => finishAppointment(appointment.id)}>Finished</button></td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
        </>
    )
}
