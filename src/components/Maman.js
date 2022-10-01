import React, { Component } from "react";

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null,
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Maman</h1>
        <button>Ordre de la mère</button>
        <hr />
      </div>
    );
  }
}

export default Maman;
