import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemonAxios, setPokemonAxios] = useState([])
  const axiosAPI = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(response => {
        setPokemonAxios(response.data.results)
        console.log(response.data.results)
      })
      .catch(error => console.log(error))
  }
  
  return (
    <>
      <div><button onClick={axiosAPI}>axios Pokemon API</button></div>
      <fieldset>
          <legend>FETCH API with AXIOS</legend>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {pokemonAxios.map((pokemon,i) =>
                <tr key={i}>
                  <td>{pokemon.name}</td>
                </tr>
              )}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </fieldset>
    </>
  )
}

export default App
