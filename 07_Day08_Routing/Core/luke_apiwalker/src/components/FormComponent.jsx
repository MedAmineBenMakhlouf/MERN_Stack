import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormComponent = () => {
    const [swapi, setSwapi] = useState([])
    const [id, setID] = useState()
    const [his_name, setName] = useState()
    const navigate = useNavigate()
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
    const SearchForSwapi = (e) =>
    {
        e.preventDefault();
        navigate(`/${his_name}/${id}`)
    } 
    // }
    return (
        <>
            <form onSubmit={SearchForSwapi}>


                <div className='d-flex justify-content-center align-items-center'>
                    Search for:<select name="select" id="i" onChange={(e)=>setName(e.target.value)}>
                        <option>---select---</option>
                        {swapi.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                    ID: <input type="number" name="" id="" onChange={(e)=>setID(e.target.value)}/>
                </div>
                <button>Search</button>
            </form>
        </>
    )


}
export default FormComponent