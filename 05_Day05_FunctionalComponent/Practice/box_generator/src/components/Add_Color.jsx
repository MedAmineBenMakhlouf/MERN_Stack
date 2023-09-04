import React, { useState } from 'react'

const colorName =""
const Add_Color = (props) => {
    const [inputColor, setColor] = useState("")

    
    const handleColor = (e) => {
        e.preventDefault()
        props.Add(inputColor)
        setColor("")
    }
    return (
        <>
            <form onSubmit={handleColor}>
                <p>Add color name: <input type="text"

                onChange={(e)=>setColor(e.target.value)} 
                value={inputColor}/></p>

                <button>Add </button>
            </form>
        </>
    )
}

export default Add_Color