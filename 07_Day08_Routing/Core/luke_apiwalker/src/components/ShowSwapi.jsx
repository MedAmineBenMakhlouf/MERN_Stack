import React, { useState, useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const ShowSwapi = ({baseUrl}) => {
    const navigate=useNavigate()
    const { id } = useParams()
    const { his_name } = useParams()
    const [word, setWord] = useState('')
    const [homeWord, setHomeWord] = useState('')
    useEffect(() => {
        axios.get(`${baseUrl}/${his_name}/${id}/?format=json`)
            .then(res => {
                setWord(res.data)
                his_name == "people" &&
                axios.get(res.data.homeworld)
                .then(res=> {
                    console.log(res.data);
                    setHomeWord(res.data)
                })
                .catch(error=> console.log(error))
            })
            .catch(err => {
                console.log("check your info.", err);
            })
    }, [his_name, id])
    console.log(his_name)
    return (
        <div>
            {(() => {
                switch (his_name) {
                    case "planets":
                        return (
                            <div>
                                <h3>{word.name}</h3>
                                <p>Climate: {word.climate} cm</p>
                                <p>Terrain: {word.terrain} kg</p>
                                <p>Surface Water: {word.surface_water}</p>
                                <p>Population: {word.population}</p>
                            </div>
                        );
                    case "people":
                        return (
                            <div>
                                <h3>{word.name}</h3>
                                <p>Height: {word.height} cm</p>
                                <p>Hair Color: {word.hair_color} kg</p>
                                <p onClick={()=> {
                                    navigate(homeWord.url.replace(baseUrl,""))
                                }}>World: {homeWord.name}</p>
                                <p>date bearth: {word.birth_year}</p>
                            </div>
                        );

                    default:
                        return null
                }
            })()}
        </div>
    )
}

export default ShowSwapi