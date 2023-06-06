import React, { useState, useEffect } from 'react'

export default function AppointmentForm() {
    const [technicians, setTechnicians] = useState([])
    const [vin, setVin] = useState('')
    const [customer, setCustomer] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [technician, setTechnician] = useState('')
    const [reason, setReason] = useState('')


    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data["technicians"])
            console.log(technicians)
        }
    }
    function handleTechnicianChange(e) {
        setTechnician(e.target.value)
    }
    function handleVinChange(e) {
        setVin(e.target.value)
    }
    function handleCustomerChange(e) {
        setCustomer(e.target.value)
    }
    function handleDateTimeChange(e) {
        setDateTime(e.target.value)
    }
    function handleReasonChange(e) {
        setReason(e.target.value)
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {}
        data.vin = vin
        data.customer = customer
        data.date_time = dateTime
        data.technician = technician
        data.reason = reason
        console.log(data)
        const createAppointmentUrl = "http://localhost:8080/api/appointments/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(createAppointmentUrl, fetchConfig)
        if (response.ok) {
            const newAppointment = await response.json()
            console.log(newAppointment)
            setVin('')
            setCustomer('')
            setDateTime('')
            setTechnician('')
            setReason('')
            setTechnicians([])
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" className="form-control" />
                            <label htmlFor="vin">Automobile VIN...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={customer} onChange={handleCustomerChange} placeholder="Customer" required type="text" name="customer" className="form-control" />
                            <label htmlFor="pictureUrl">Year...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={dateTime} onChange={handleDateTimeChange} placeholder="Date/Time" required type="datetime-local" name="date_time" className="form-control" />
                            <label htmlFor="pictureUrl">Date & Time...</label>
                        </div>
                        <div className="mb-3">
                            <select value={technician.employee_id} onChange={handleTechnicianChange} name="technician" className="form-select" required>
                                <option value="">Choose a technician...</option>
                                {technicians.map(technician => {
                                    return (<option value={technician.employee_id} key={technician.employee_id}>{`${technician.first_name} ${technician.last_name}`}</option>)
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={reason} onChange={handleReasonChange} placeholder="Reason" required type="text" name="reason" className="form-control" />
                            <label htmlFor="pictureUrl">Reason...</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
