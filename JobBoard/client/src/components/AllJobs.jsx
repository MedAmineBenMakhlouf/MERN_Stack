import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
const AllJobs = ({ baseUrl}) => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.get(baseUrl + "jobs")
            .then(res =>
                setJobs(res.data))
            .catch(error => console.log(error))
    }, [])

    const deleteJob = (id) => {
        axios.delete(baseUrl + "jobs/" + id)
            .then(res => {
                const filteredJobs = jobs.filter(job => job._id != id)
                setJobs(filteredJobs)
            }
            )
    }

    return (
        <>
            <Link to={'/jobs/create'}>Create job</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Job title</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs && jobs.map(j =>
                        <tr key={j._id}>
                            <td><span>{j.title} || {j._id}</span>  {j.remote && <span>(remote)</span>}</td>
                            <td>{j.company}</td>
                            <td>{j.status}</td>
                            <td><Link to={`/jobs/${j._id}/edit`}>Edit</Link> <button onClick={() => deleteJob(j._id)}>Delete</button></td>
                        </tr>

                    )}
                </tbody>
            </table>
        </>
    )
}

export default AllJobs