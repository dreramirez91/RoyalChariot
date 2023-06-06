import React, { useState, useEffect } from 'react'

export default function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([])
    async function fetchAutomobiles() {
        const response = await fetch('http://localhost:8100/api/automobiles/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAutomobiles(data.autos)
        }
    }
    useEffect(() => {
        fetchAutomobiles()
    }, [])

    return (
        <>
        <h1 style={{ marginTop: '10px'}}>Automobiles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">VIN</th>
                    <th scope="col">Color</th>
                    <th scope="col">Year</th>
                    <th scope="col">Model</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Sold</th>
                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile => {
                    return (
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td> {automobile.color}</td>
                            <td> {automobile.year}</td>
                            <td> {automobile.model.name}</td>
                            <td> {automobile.model.manufacturer.name}</td>
                            <td> {automobile.sold}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
