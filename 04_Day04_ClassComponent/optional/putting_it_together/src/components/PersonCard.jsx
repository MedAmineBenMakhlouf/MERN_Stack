import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageIncrease: this.props.p.age,
    };
  }
  IncreaseDate = () => {
    this.setState({ ageIncrease: this.state.ageIncrease+1 }, () => console.log(this.state.ageIncrease));
  };
  render() {
    return (
      <div>
          <div>
            <h1>
              {this.props.p.last_name},{this.props.p.first_name}
            </h1>
            <p>age: {this.state.ageIncrease}</p>
            <p>Hair color: {this.props.p.hair_color}</p>
            <button onClick={this.IncreaseDate}>
              Increase Birth-Day for {this.props.p.first_name} {this.props.p.last_name}
            </button>
          </div>
      </div>
    );
  }
}

export default PersonCard;
