import React, { useState, useEffect } from 'react'

export default function ModelForm() {
    const [manufacturers, setManufacturers] = useState([])
    const [model, setModel] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [manufacturer, setManufacturer] = useState('')


    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data["manufacturers"])
            console.log(manufacturers)
        }
    }
    function handleManufacturerChange(e) {
        setManufacturer(e.target.value)
    }
    function handleModelChange(e) {
        setModel(e.target.value)
    }
    function handlePictureUrlChange(e) {
        setPictureUrl(e.target.value)
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {}
        data.name = model
        data.picture_url = pictureUrl
        data.manufacturer_id = manufacturer
        console.log(data)
        const createModelUrl = "http://localhost:8100/api/models/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(createModelUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()
            console.log(newModel)
            setManufacturer('')
            setModel('')
            setPictureUrl('')
        }
    }
    return(
    <div className="row">
    <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={handleSubmit} id="create-shoe-form">
                <div className="form-floating mb-3">
                    <input value={model} onChange={handleModelChange} placeholder="Model" required type="text" name="model" id="model" className="form-control" />
                    <label htmlFor="shoeModel">Model name...</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={pictureUrl} onChange={handlePictureUrlChange} placeholder="Picture URL" required type="text" name="pictureUrl" id="pictureUrl" className="form-control" />
                    <label htmlFor="pictureUrl">Picture URL...</label>
                </div>
                <div className="mb-3">
                                        <select value={manufacturer} onChange={handleManufacturerChange} name="manufacturer" id="manufacturer" className="form-select" required>
                                            <option value="">Choose a manufacturer...</option>
                                            {manufacturers.map(manufacturer => {
                                                return (<option value={manufacturer.id} key={manufacturer.id}>{manufacturer.name}</option>)
                                            })}
                                        </select>
                                    </div>
                <button className="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
    </div>
)
                                        }
