import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FormComponent = () => {
    const [swapi, setSwapi] = useState([])
    // const axiosAPI = (e) => {
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                // setSwapi(response.data)
                setSwapi(Object.keys(response.data));
                console.log(Object.keys(response.data));
                // setSwapi(key)
                console.log(response.data)
            })
            .catch(error => console.log(error))

    }, [])
    // }
    return (
        <>
            <select name="select" id="i">

                {swapi.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
        </>
    )


}
export default FormComponent