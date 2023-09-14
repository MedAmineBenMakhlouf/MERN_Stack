import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import AllPersons from './AllPersons'
const FormPerson = (props) => {
    const [product,setProduct] = useState({name:"",price:0,description:""})
    const [nameError, setNameError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [descriptionError,setDescriptionError]= useState("")
    const navigate = useNavigate()


    const HandleName = (e) => {
        setProduct({...product,name:e.target.value});
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
        setProduct({...product,price:parseInt(e.target.value)});
        if (parseInt(e.target.value)== 0) {
            setPriceError("Price is required!");
        } else {
            setPriceError("");
        }
    }

    const HandleDescription = (e) => {
        setProduct({...product,description:e.target.value});
        if (e.target.value.length < 1) {
            setDescriptionError("Name is required!");
        } else if (e.target.value.length < 3) {
            setDescriptionError("Name must be 2 characters or longer!");
        } else {
            setDescriptionError("");
        }
    }

    const HandleForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/products/create" ,product)
        .then(res=>{
            console.log(res)
            props.setProducts([...props.products,res.data])
            console.log(props.products)

        })
        .catch(er=>console.log(er))

    }

    return (
        <>
        <form onSubmit={(e)=>HandleForm(e)}>
            <h2>Product Manager</h2>
            <p>Name:<input type='text' onChange={(e) => HandleName(e)} value={product.name} /></p>
            {
                nameError ?
                    <p style={{ color: 'red' }}>{nameError}</p> :
                    ''
            }
            <p>Price:<input type='number' onChange={(e) => HandlePrice(e)} value={product.price} /></p>
            {
                priceError ?
                    <p style={{ color: 'red' }}>{priceError}</p> :
                    ''
            }
            <p>Description:<input type='text' onChange={(e) => HandleDescription(e)} value={product.description} /></p>
            {
                descriptionError ?
                    <p style={{ color: 'red' }}>{descriptionError}</p> :
                    ''
            }
            <button>Send</button>
        </form>
        <hr />
        <AllPersons product={product} setProduct={setProduct}/>
        </>
    )
}

export default FormPerson