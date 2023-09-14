import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import noteStyle from './Note.module.css'


const NoteShow = ({ baseUrl }) => {
    const { id } = useParams()
    const [note, setNote] = useState({ title: "", content: "" })
    useEffect(() => {
        axios.get(baseUrl + "/notes/" + id)
            .then(response => {
                console.log(response.data);
            setNote(response.data)
            })
            .catch(error=> console.log(error))
    }, [id])
    return (
        <div className={noteStyle.note}>
            <h1 className='fst-italic'>{note.isImportant && "📌"} {note.title}</h1>
            <p className='fs-4'>
                {note.content}
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <p>{note.createdAt}</p>
            </div>
        </div>
    )
}

export default NoteShow