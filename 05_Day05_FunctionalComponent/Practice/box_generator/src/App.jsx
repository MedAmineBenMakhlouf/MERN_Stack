import { useState } from 'react'
import './App.css'
import Show_Color from './components/Show_Color'
import Add_Color from './components/Add_Color'

// const listColor =[]
function App() {

  const [colors, setColors] = useState([])
  
  const Add = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <>
      <fieldset>
        <Show_Color colors={colors} />
        <Add_Color Add={Add} />
      </fieldset>
    </>
  )
}

export default App
