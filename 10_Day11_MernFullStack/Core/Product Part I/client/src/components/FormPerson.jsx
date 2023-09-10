import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const FormPerson = () => {
    const [name, setName] = useState()
    const [nameError, setNameError] = useState("")
    const [price, setPrice] = useState(0)
    const [priceError, setPriceError] = useState("")
    const [description,setDescription]= useState("")
    const [descriptionError,setDescriptionError]= useState("")
    const [list_persons,setListPersons] = useState([])
    const navigate = useNavigate()


    const HandleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
            setNameError("Name is required!");
        } else if (e.target.value.length < 2) {
            setNameError("Name must be 2 characters or longer!");
        } else {
            setNameError("");
        }
    }

    const HandlePrice = (e) => {
        console.log(parseInt(e.target.value))
        setPrice(parseInt(e.target.value));
        if (parseInt(e.target.value)== 0) {
            setPriceError("Price is required!");
        } else {
            setPriceError("");
        }
    }

    const HandleDescription = (e) => {
        setDescription(e.target.value);
        if (e.target.value.length < 1) {
            setDescriptionError("Name is required!");
        } else if (e.target.value.length < 3) {
            setDescriptionError("Name must be 2 characters or longer!");
        } else {
            setDescriptionError("");
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:8001/api/products")
        .then(res=>{
            console.log(res.data)
            setListPersons(res.data)})
        .catch(er=>console.log(er))

    },[])
    const HandleForm = (e) => {
        // e.preventDefault()
        console.log(name,price)
        axios.post("http://localhost:8001/api/products/create" ,{name,price,description})
        .then(res=>
            console.log(res))
        .catch(er=>console.log(er))

    }

    return (
        <>
        <form onSubmit={(e)=>HandleForm(e)}>
            <h2>Product Manager</h2>
            <p>Name:<input type='text' onChange={(e) => HandleName(e)} value={name} /></p>
            {
                nameError ?
                    <p style={{ color: 'red' }}>{nameError}</p> :
                    ''
            }
            <p>Price:<input type='number' onChange={(e) => HandlePrice(e)} value={price} /></p>
            {
                priceError ?
                    <p style={{ color: 'red' }}>{priceError}</p> :
                    ''
            }
            <p>Description:<input type='text' onChange={(e) => HandleDescription(e)} value={description} /></p>
            {
                descriptionError ?
                    <p style={{ color: 'red' }}>{descriptionError}</p> :
                    ''
            }
            <button>Send</button>
        </form>
        <hr />
            {list_persons.map((p) =>
            <div key={p._id}>
            <div><a onClick={(e)=>navigate(`/api/products/${p._id}`)}>{p.name} {p.price}</a></div>
            <br />
            </div>
            
            )}
        </>
    )
}

export default FormPerson