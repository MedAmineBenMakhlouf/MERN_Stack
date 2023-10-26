import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import '../App.css'
const ShowOne = ({ baseUrl }) => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({})
    useEffect(() => {
        axios.get(baseUrl + '/' + id)
            .then(response => setPirate(response.data))
            .catch(err => console.error(err));
    }, [id]);

    const updateHookHand = () => {
        const updatedPirate = {...pirate,hookHand:!pirate.hookHand}
        setPirate(updatedPirate)
        console.log(pirate)
        axios.put(baseUrl+'/'+id, updatedPirate)
            .then(res => { console.log(pirate) })
            .catch(error => console.log(error))
    }
    const updateEyePatch = () => {
        const updatedPirate = {...pirate,eyePatch:!pirate.eyePatch}
        setPirate(updatedPirate)
        axios.put(baseUrl+'/'+id, updatedPirate)
            .then(res => { console.log(pirate) })
            .catch(error => console.log(error))
    }
    const updatePegLeg = () => {
        const updatedPirate = {...pirate,pegLeg:!pirate.pegLeg}
        setPirate(updatedPirate)
        axios.put(baseUrl+'/'+id,updatedPirate)
            .then(res => {
                console.log("PEGLEG--------",res.data);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <header style={{ backgroundColor: "gray" }}>
                <h1>{pirate.crewPosition} {pirate.name}</h1>

            </header>

            <div className="pirate-details">

                <div>
                    <div>
                        <img src={pirate.imageUrl} alt={pirate.name} className='pirate-img' />
                        <p className="h1">"{pirate.catchPhrase}"</p>
                    </div>
                    <div className="about-section">
                        <h2>About</h2>
                        <p>Position: {pirate.crewPosition}</p>
                        <p>Treasures: {pirate.treasureChests}</p>
                        <div>
                            <label>Peg Leg:</label>
                            <span>{pirate.pegLeg ? "Yes" : "No"}</span>
                            <button style={pirate.pegLeg ?
                                {backgroundColor: "red" } : { backgroundColor: "green" }}
                                onClick={()=>updatePegLeg()}
                                >{pirate.pegLeg ? "No" : "Yes"}</button>
                        </div>
                        <div>
                            <label>Eye Patch:</label>
                            <span>{pirate.eyePatch ? "Yes" : "No"}</span>
                            <button style={pirate.eyePatch ?
                                {backgroundColor: "red" } : { backgroundColor: "green" }}
                                onClick={()=>updateEyePatch()}
                                >{pirate.eyePatch ? "No" : "Yes"}</button>
                        </div>
                        <div>
                            <label>Hook Hand:</label>
                            <span>{pirate.hookHand ? "Yes" : "No"}</span>
                            <button style={pirate.hookHand ?
                                {backgroundColor: "red" } : { backgroundColor: "green" }}
                                onClick={()=>updateHookHand()}
                                >{pirate.hookHand ? "No" : "Yes"}</button>
                        </div>
                    </div>
                </div>
                <Link to="/pirates">All the Crew</Link>
            </div>
        </div>
    )
}

export default ShowOne