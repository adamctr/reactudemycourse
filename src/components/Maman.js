import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null,
  };

  ordreMaman = () => {
    this.setState({
      messageMaman: "Va ranger ta chambre",
    });
  };

  reponseToto = () => {
    this.setState({
      messageToto: "Oui maman",
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Maman</h1>
        <button onClick={this.ordreMaman}>Ordre de la mère</button>
        <p>{this.state.messageMaman}</p>
        <hr />
        <Toto
          name="Toto"
          reponseToto={this.reponseToto}
          leState={this.state}
        ></Toto>
      </div>
    );
  }
}

export default Maman;
