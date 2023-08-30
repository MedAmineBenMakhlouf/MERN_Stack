import React, { Component } from 'react'

class PersonCard extends Component {
  render() {
    return (
      <div>
        {this.props.person.map(p => 
        <div>
        <h1>
            {p.last_name},{p.first_name}
        </h1>
        <p>age: {p.age}</p>
        <p>Hair color: {p.hair_color}</p>
        </div>
        )}
      </div>
      
    )
  }
}

export default PersonCard
