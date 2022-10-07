import { Component } from "react";
import "./App.css";
import React from "react";
import Vegeta from "./components/Vegeta";
import Goku from "./components/Goku";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vegeta: 100,
      goku: 100,
    };
  }

  reduceLife = (compname) => {
    if (compname === "Goku") {
      this.setState((prevState) => {
        return {
          vegeta: prevState.vegeta - 10,
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          goku: prevState.goku - 10,
        };
      });
    }
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>Vegeta vs Goku</h1>
        <div className="container">
          <Vegeta
            name="Vegeta"
            life={this.state.vegeta}
            reduceHandler={this.reduceLife}
          ></Vegeta>
          <Goku
            name="Goku"
            life={this.state.goku}
            reduceHandler={this.reduceLife}
          ></Goku>
        </div>
      </div>
    );
  }
}

export default App;
