import React, { useState, useEffect } from 'react'

export default function ModelList() {
    const [models, setModels] = useState([])
    async function fetchModels() {
        const response = await fetch('http://localhost:8100/api/models/')
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setModels(data.models)
        }
    }
    useEffect(() => {
        fetchModels()
    }, [])

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Picture</th>
                </tr>
            </thead>
            <tbody>
                {models.map(model => {
                    return (
                        <tr key={model.id}>
                            <td>{model.name}</td>
                            <td> {model.manufacturer.name}</td>
                            <td scope="row"><img src={model.picture_url} alt={`Image of ${model.name} ${model.manufacturer.name}`} className="img-thumbnail" style={{ maxWidth: '20em', maxHeight: '20em' }} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
