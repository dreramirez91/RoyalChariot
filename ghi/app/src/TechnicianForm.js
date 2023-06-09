import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TechnicianForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const navigate = useNavigate()

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }
    function handleEmployeeIdChange(e) {
        setEmployeeId(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {}
        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId
        console.log(data)
        const createTechnicianUrl = "http://localhost:8080/api/technicians/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(createTechnicianUrl, fetchConfig)
        if (response.ok) {
            const newTechnician = await response.json()
            console.log(newTechnician)
            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
        navigate("/technicians")
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={handleFirstNameChange} placeholder="First name" required type="text" name="first_name" className="form-control" />
                            <label htmlFor="firstName">First name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={handleLastNameChange} placeholder="Last name" required type="text" name="last_name" className="form-control" />
                            <label htmlFor="lastName">Last name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employeeId} onChange={handleEmployeeIdChange} placeholder="Employee ID" required type="text" name="employee_id" className="form-control" />
                            <label htmlFor="employeeId">Employee ID...</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
