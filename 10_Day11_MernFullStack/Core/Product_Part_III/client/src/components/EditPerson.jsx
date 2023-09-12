import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const EditPerson = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const [person, setPerson] = useState({})
    // const [name, setName] = useState("")
    // const [price, setPrice] = useState("")
    // const [description, setDescription] = useState("")
    const [product ,setProduct] = useState({name:"", price:0.00, description:""})
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${id}`)
            .then(result => {
                console.log(result.data)
                setProduct(result.data)
            })
            .catch(error => console.log(error))
    }, [id])

    const EditProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8001/api/products/${id}`, product)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <form onSubmit={EditProduct}>
                <h2>Name:  </h2><input type="text"
                    onChange={(e) => setProduct({...product,name:e.target.value})} value={product.name} />
                <h2>Price: </h2><input type="number"
                    onChange={(e) => setProduct({...product,price:e.target.value})} value={product.price} />
                <h2>Description: </h2> <input type="text"
                    onChange={(e) => setProduct({...product,description:e.target.value})} value={product.description} />
                <button >Edit</button>
            </form>
        </>
    )
}

export default EditPerson