import React, { useState } from 'react'

const Add_list = (props) => {
    const [toDo, setToDo] = useState({ content: "", isCompleted: false })

    const HandleForm = (e) => {
        e.preventDefault()
        props.AddToList(toDo)
        setToDo({content:""})
    }
    return (
        <>
            <form onSubmit={HandleForm}>
                <p>Add to list </p>
                <input type="text" onChange={(e) => setToDo({ ...toDo, content: e.target.value })}
                    value={toDo.content} />
            </form>
        </>

    )
}

export default Add_list