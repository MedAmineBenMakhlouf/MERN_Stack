import React from 'react'

const PersonCard = (props) => {

  return (
    <>
      <h2>{props.user.first_name}, {props.user.last_name}</h2>
      <p>Age: {props.user.Age}</p>
      <p>Hair Color: {props.user.hair_color}</p>
    </>
  )
}

export default PersonCard