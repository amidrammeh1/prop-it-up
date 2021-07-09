import React, { Component } from 'react';


class PersonCard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          age: this.props.age
      };

     
  }
  birthday = () => {
    this.setState({ 
      age: this.state.age +1 
    });
  }
  
  render() {
    const { fName, lName, age, hairColor } = this.props;
    return (
      <div className="person-card">
      <h1>{lName}, {fName}</h1>
      <p>Age: {age}</p>
      <p> Hair Color: {hairColor}</p>
      <button onClick={ this.birthday }>Happy Birthday for {this.props.fName} !!</button>
      </div>
    )
    }
}

export default PersonCard;