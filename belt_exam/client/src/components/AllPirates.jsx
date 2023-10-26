import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
const AllPirates = ({ baseUrl }) => {
    const [pirates,setPirates]= useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => setPirates(res.data))
            .catch(err => console.error(err));
    }, []);

    const deletePirate = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <header className="App-header">
                <h1>All the Crew</h1>
                <button onClick={() => navigate("/")} style={{ alignSelf: 'flex-end' }}>
                    Add One
                </button>
            </header>
            <div>
                <h1>Pirate Crew</h1>
                {pirates.map(pirate => (
                    <div key={pirate._id} className="pirate">
                        <img src={pirate.imageUrl} alt="pirate pic" className="pirate-img" />
                        <div className="">
                            <h2>{pirate.name}</h2>
                            <div className="pirate-actions">
                                <Link to={`/pirates/${pirate._id}`}><button>View Pirate</button></Link>
                                <button onClick={() => deletePirate(pirate._id)}>Walk the plank</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPirates