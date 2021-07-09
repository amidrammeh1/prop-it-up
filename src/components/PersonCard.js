import React, { Component } from 'react';

class PersonCard extends Component {
  render() {
    const { fName, lName, age, hairColor } = this.props;
    return (
      <div className="person-card">
      <h1>{lName}, {fName}</h1>
      <p>Age: {age}</p>
      <p> Hair Color: {hairColor}</p>
      </div>
    )
  }
}

export default PersonCard