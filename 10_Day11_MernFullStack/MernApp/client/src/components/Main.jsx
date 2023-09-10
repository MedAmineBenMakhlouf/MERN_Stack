import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
const Main = () => {
    const[message,setMessage]= useState("Loading....")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);


  return (
    <div>Message from the Back-end: {message}</div>
  )
}

export default Main