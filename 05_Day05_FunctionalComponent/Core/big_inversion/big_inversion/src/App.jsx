import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const user = [
    { first_name: "Doe", last_name: "Jane", Age: 45, hair_color:"Black" },
    { first_name: "Smith", last_name: "John", Age: 88, hair_color:"Brown" },
    { first_name: "Fillmore", last_name: "Millard", Age: 50, hair_color:"Brown" },
    { first_name: "Smith", last_name: "Maria", Age: 62, hair_color:"Brown" },
  ];
  return (
    <>
      {user.map((u,i) => <PersonCard key={i} user={u} />)} 
    </>
  )
}

export default App
