import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ShowPerson = () => {
    const { id } = useParams()
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${id}`)
            .then(result => {
                console.log(result.data)
                setPerson(result.data)
            })
            .catch(error => console.log(error))
    }, [id])
    return (
        <>
        <Link to={'/'}>Back</Link>
            <h2>Name: {person.name} </h2>
            <h2>Price: {person.price}</h2>
            <h2>Description: {person.description}</h2>

        </>
    )
}

export default ShowPerson