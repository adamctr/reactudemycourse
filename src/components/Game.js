import React, { Component } from "react";

class Result extends Component {
  state = {
    name: "mario",
    winner: true,
  };

  render() {
    return (
      <div>
        <h1>Bravo {this.state.name}</h1>
        return this.state.winner ? <p>GG fréro</p> : ''
      </div>
    );
  }
}

export default Result;
