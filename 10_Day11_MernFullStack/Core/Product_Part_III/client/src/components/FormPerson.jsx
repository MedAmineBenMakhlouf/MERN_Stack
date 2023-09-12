import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const FormPerson = () => {

    const [product, setProduct] = useState({ name: "", price: 0, description: "" })
    const [list_persons, setListPersons] = useState([])
    const [nameError, setNameError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()


    const HandleName = (e) => {
        setProduct({ ...product, name: e.target.value });
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
        setProduct({ ...product, price: parseInt(e.target.value) });
        if (parseInt(e.target.value) == 0) {
            setPriceError("Price is required!");
        } else {
            setPriceError("");
        }
    }

    const HandleDescription = (e) => {
        setProduct({...product, description: e.target.value});
        if (e.target.value.length < 1) {
            setDescriptionError("Name is required!");
        } else if (e.target.value.length < 3) {
            setDescriptionError("Name must be 2 characters or longer!");
        } else {
            setDescriptionError("");
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8001/api/products")
            .then(res => {
                console.log(res.data)
                setListPersons(res.data)
            })
            .catch(er => console.log(er))

    }, [])
    const HandleForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/products", { name, price, description })
            .then(res =>
                console.log(res.data)
                // setListPersons(res.data)
            )
            .catch(er => console.log(er))
        setName("")
        setPrice(0)
        setDescription("")
    }

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8001/api/products/${id}`)
            .then(res =>
                setListPersons((prev) => prev.filter(({ _id }) => _id !== id)))
            .catch(er => console.log(er))
    }

    return (
        <>
            <form onSubmit={HandleForm}>
                <h2>Product Manager</h2>
                <p>Name:<input type='text'
                    onChange={(e) => HandleName(e)} value={product.name} /></p>
                {
                    nameError ?
                        <p style={{ color: 'red' }}>{nameError}</p> :
                        ''
                }
                <p>Price:<input type='number'
                    onChange={(e) => HandlePrice({ ...product, price: e.target.value })} value={product.price} /></p>
                {
                    priceError ?
                        <p style={{ color: 'red' }}>{priceError}</p> :
                        ''
                }
                <p>Description:<input type='text'
                    onChange={(e) => HandleDescription({ ...product, description: e.target.value })} value={product.description} /></p>
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
                    <div>
                        <a onClick={(e) => navigate(`/api/products/show/${p._id}`)}>{p.name}</a>
                        {/* <button onClick={(e)=>navigate(`/api/products/${p._id}`)}>delete</button> */}
                        <button onClick={() => deleteProduct(p._id)}>delete</button>
                        <button onClick={() => navigate(`/api/products/edit/${p._id}`)}>Edit</button>
                    </div>
                    <br />
                </div>

            )}
        </>
    )
}

export default FormPerson