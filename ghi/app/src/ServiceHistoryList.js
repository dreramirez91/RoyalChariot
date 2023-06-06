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

    async function handleSubmit(e) {
        e.preventDefault()
        async function fetchFilteredAppointments() {
            const response = await fetch('http://localhost:8080/api/appointments/')
            console.log(response)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                const filteredAppointments = data.appointments.filter(appointment => appointment.vin === vin)
                setAppointments(filteredAppointments)
            }
        }
        fetchFilteredAppointments()
    }
    function soldStatus(vin) {
        for (const auto of automobiles) {
            console.log("HERE COMES THE CARS", auto)
            if (vin === auto["vin"] && auto["sold"] === true) {
                return "Yes"
            } else {
                return "No"
            }
        }
    }

return (
    <>
        <h1 style={{ marginTop: '10px' }}>Service History</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input value={vin} onChange={handleVinChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="vin">Search by VIN...</label> <button onClick={() => handleSubmit()} className="btn btn-primary">Search</button>
            </div>
        </form>
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
