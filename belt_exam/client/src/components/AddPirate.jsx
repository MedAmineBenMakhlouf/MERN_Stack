import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPirate = ({ baseUrl }) => {
    const navigate = useNavigate()
    const [pirate, setPirate] = useState({
        name: "",
        imageUrl: "",
        treasureChests: 0,
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    })
    const [errors, setErrors] = useState({
        name: "",
        imageUrl: "",
        catchPhrase: "",
        crewPosition: ""
    })

    const handleName = e => {
        setPirate({ ...pirate, name: e.target.value })
        if (e.target.value.length < 1) {
            return errors["name"] = "The name is required"
        }
        else {
            return errors["name"] = ""
        }
    }

    const handleUrl = e => {
        setPirate({ ...pirate, imageUrl: e.target.value })
        if (e.target.value.length < 1) {
            return errors["imageUrl"] = "The name is required"
        }
        else {
            return errors["imageUrl"] = ""
        }
    }

    const handleCatchPhrase = e => {
        setPirate({ ...pirate, catchPhrase: e.target.value })
        if (e.target.value.length < 1) {
            return errors["catchPhrase"] = "URL link is required"
        }
        else {
            return errors["catchPhrase"] = ""
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(pirate)
        axios.post(baseUrl, pirate)
            .then(res => {
                console.log("id Created", res.data._id)
                navigate(`/pirates/${res.data._id}`)
            })
            .catch(error => {
                const errs = {
                    name: "",
                    imageUrl: "",
                    catchPhrase: "",
                    crewPosition: "",
                    treasureChests:""
                }
                for (let key of Object.keys(error.response.data.errors)) {
                    console.log(error.response.data.errors[key].message)
                    errs[key] = error.response.data.errors[key].message
                }
                setErrors({ ...errors, ...errs })
            })
    }
    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to="/pirates"><button>Crew Board</button></Link>
            <form onSubmit={handleForm}>

                <div className="form-group mb-3">
                    <label>Pirate Name:</label>
                    <input className="form-control" type="text" value={pirate.name}
                        onChange={e => handleName(e)} />
                    {errors.name && <span className='text-danger h5'> {errors.name}</span>}
                </div>

                <div className="form-group mb-3">
                    <label>Image Url:</label>
                    <input className="form-control" type="text" value={pirate.imageUrl}
                        onChange={e => handleUrl(e)} />
                    {errors.imageUrl && <span className='text-danger h5'> {errors.imageUrl}</span>}
                </div>


                <div className="form-group mb-3">
                    <label># of Treasure Chests:</label>
                    <input className="form-control" type="number" value={pirate.treasureChests}
                        onChange={(e) => setPirate({ ...pirate, treasureChests: e.target.value })} />
                    {errors.treasureChests && <span className='text-danger h5'> {errors.treasureChests}</span>}
                </div>


                <div className="form-group mb-3">
                    <label>Pirate Catch Phrases:</label>
                    <input className="form-control" type="text" value={pirate.catchPhrase}
                        onChange={handleCatchPhrase} />
                    {errors.catchPhrase && <span className='text-danger h5'> {errors.catchPhrase}</span>}
                </div>


                <div className="form-group mb-3">
                    <label>Crew Position:</label>
                    <select className="form-control" value={pirate.crewPosition}
                        onChange={(e) => setPirate({ ...pirate, crewPosition: e.target.value })}>
                        <option value="">-------Select Position--------</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    {errors.crewPosition && <p>{errors.crewPosition.message}</p>}
                    {errors.crewPosition && <span className='text-danger h5'> {errors.crewPosition}</span>}
                </div>
                <div className="form-group mb-3">
                    <label>Peg Leg:</label>
                    <input className='form-check-input mx-3' type="checkbox" checked={pirate.pegLeg}
                        onChange={(e) => setPirate({ ...pirate, pegLeg: e.target.checked })} />
                </div>
                <div className="form-group mb-3">
                    <label>Eye Patch:</label>
                    <input className='form-check-input mx-3' type="checkbox" checked={pirate.eyePatch}
                        onChange={(e) => setPirate({ ...pirate, eyePatch: e.target.checked })} />
                </div>
                <div className="form-group mb-3">
                    <label>Hook Hand:</label>
                    <input type="checkbox" checked={pirate.hookHand}
                        onChange={(e) => setPirate({ ...pirate, hookHand: e.target.checked })} />
                </div>
                <button>Add it</button>
            </form>

        </div>
    )
}

export default AddPirate