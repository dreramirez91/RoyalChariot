import React, { useState, useEffect } from 'react'

export default function AutomobileForm() {
    const [models, setModels] = useState([])
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [vin, setVin] = useState('')
    const [model, setModel] = useState('')


    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setModels(data["models"])
            console.log(models)
        }
    }
    function handleColorChange(e) {
        setColor(e.target.value)
    }
    function handleYear(e) {
        setYear(e.target.value)
    }
    function handleVin(e) {
        setVin(e.target.value)
    }
    function handleModelChange(e) {
        setModel(e.target.value)
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        const data = {}
        data.color = color
        data.year = year
        data.vin = vin
        data.model_id = model
        console.log(data)
        const createAutomobileUrl = "http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(createAutomobileUrl, fetchConfig)
        if (response.ok) {
            const newAutomobile = await response.json()
            console.log(newAutomobile)
            setColor('')
            setYear('')
            setVin('')
            setModel('')
        }
    }
    return(
    <div className="row">
    <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Add an automobile to inventory</h1>
            <form onSubmit={handleSubmit} id="create-shoe-form">
                <div className="form-floating mb-3">
                    <input value={color} onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                    <label htmlFor="shoeModel">Color...</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={year} onChange={handleYear} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                    <label htmlFor="pictureUrl">Year...</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={vin} onChange={handleVin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="pictureUrl">VIN...</label>
                </div>
                <div className="mb-3">
                                        <select value={model} onChange={handleModelChange} name="model" id="model" className="form-select" required>
                                            <option value="">Choose a model...</option>
                                            {models.map(model => {
                                                return (<option value={model.id} key={model.id}>{model.name}</option>)
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
