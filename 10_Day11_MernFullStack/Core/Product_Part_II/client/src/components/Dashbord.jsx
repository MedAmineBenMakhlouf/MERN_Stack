import React from 'react'
import AllPersons from './AllPersons'
import FormPerson from './FormPerson'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Dashbord = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8001/api/products")
            .then(res => {
                console.log(res.data, '++++')
                setProducts(res.data)
            })
            .catch(er => console.log(er))
    }, [])
    return (
        <>
            <FormPerson products={products} setProducts={setProducts} />
            <AllPersons products={products} setProducts={setProducts} />
        </>
    )
}

export default Dashbord