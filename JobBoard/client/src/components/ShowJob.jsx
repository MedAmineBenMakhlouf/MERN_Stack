import React,{useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
const ShowJob = ({baseUrl}) => {
    const { id } = useParams()
    const [job, setJob] = useState({})
    console.log("ID from Create Job showJob",id)
    useEffect(() => {
        axios.get(baseUrl+'jobs/'+id)
            .then(result => {
                console.log(result.data)
                setJob(result.data)
            })
            .catch(error => console.log(error))
    }, [id])
    return (
        <>
            <Link to={'/'}>Back</Link>
            <h2>Title: {job.title} </h2>
            <h2>Company: {job.company}</h2>
            <h2>Remote Working: {job.remote? <span>Yes</span>:<span>No</span>}</h2>
            <h2>Status: {job.status}</h2>
            <Link to={`/jobs/${job._id}/edit`}>Edit</Link>
        </>
    )
}

export default ShowJob