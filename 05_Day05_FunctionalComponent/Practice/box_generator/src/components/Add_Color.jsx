import React, { useState } from 'react'

const Add_Color = (props) => {
    const [inputColor, setColor] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const handleColor = (e) => {
        e.preventDefault()
        props.Add({inputColor:inputColor,width:width,height:height})
        setColor("")
        setWidth("")
        setHeight("")
    }
    const handleWidth = (e)=>{
        setWidth(parseInt(e.target.value))
    }
    const handleHeight = (e)=>{
        setHeight(parseInt(e.target.value))
    }
    return (
        <>
            <form onSubmit={handleColor}>
                <p>
                    Add color name: <input type="text"
                        onChange={(e) => setColor(e.target.value)}
                        value={inputColor} />
                </p>
                <p>
                    Add Width: <input type="number" onChange={(e)=>handleWidth(e)}
                    value={width}
                    />
                </p>
                <p>
                    Add Height: <input type="number" onChange={(e)=>handleHeight(e)}
                    value={height}
                    />
                </p>
                <button>Add </button>
            </form>
        </>
    )
}

export default Add_Color