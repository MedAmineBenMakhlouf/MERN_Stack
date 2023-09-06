import React from 'react'
import { useParams } from 'react-router-dom'

const WordWithColor = () => {
    const { word } = useParams()
    const { col1 } = useParams()
    const { col2 } = useParams()
    console.log(col2)
    console.log(col1)
    
    return (
        <div>
            <h3 style={{ color:col1, backgroundColor:col2}}>the word is: {word}</h3><br />
        </div>
    )
}

export default WordWithColor