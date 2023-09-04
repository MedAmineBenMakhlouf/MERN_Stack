import React from 'react'
import './Style_Color.css'
const Show_Color = ({ colors }) => {
    return (
        <div className='container_color' >
            {colors.map((c, i) => {
                return (
                    <div className='color' key={i} 
                    style={{ backgroundColor: c.inputColor, width: c.width, height: c.height }}></div>
                )
            }
            )}
        </div>
    )
}

export default Show_Color