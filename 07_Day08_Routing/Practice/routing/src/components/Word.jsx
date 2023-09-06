import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const Word = (props) => {
    const { word } = useParams()
    console.log(word)
    return (
        <h4>
            {
                isNaN(+word)
                ?<p>The word is {word}</p>
                :<p>The number is {word}</p>
            }
        </h4>
    )
}

export default Word