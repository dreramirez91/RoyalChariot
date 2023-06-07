import React, { useState, useEffect } from 'react'

export default function ServiceHistoryList() {
    const [appointments, setAppointments] = useState([])
    const [automobiles, setAutomobiles] = useState([])
    const [vin, setVin] = useState('')
    async function fetchAppointments() {
        const response = await fetch('http://localhost:8080/api/appointments/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAppointments(data.appointments)
        }
    }
    async function fetchAutomobiles() {
        const secondResponse = await fetch(`http://localhost:8100/api/automobiles/`)
        console.log(secondResponse)
        if (secondResponse.ok) {
            const data = await secondResponse.json()
            setAutomobiles(data.autos)
        }
    }

    useEffect(() => {
        fetchAppointments()
    }, [])

    useEffect(() => {
        fetchAutomobiles()
    }, [])

    function handleVinChange(e) {
        setVin(e.target.value)
    }

    function filterAppointments() {
        const filteredAppointments = appointments.filter(appointment => appointment.vin === vin)
        setAppointments(filteredAppointments)
    }

    function soldStatus(vin) {
        for (let auto of automobiles) {
            if (vin === auto["vin"]) {
                return "Yes"
            }
        } return "No"
    }

    return (
        <>
            <h1 style={{ marginTop: '10px' }}>Service History</h1>
            <div className="form-floating mb-3">
                <input value={vin} onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Search by VIN...</label> <button onClick={() => filterAppointments()} className="btn btn-primary">Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">VIN</th>
                        <th scope="col">Is VIP?</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Date and Time</th>
                        <th scope="col">Technician</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{soldStatus(appointment.vin)}</td>
                                <td> {appointment.customer}</td>
                                <td> {appointment.date_time}</td>
                                <td> {`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                                <td> {appointment.reason}</td>
                                <td> {appointment.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
