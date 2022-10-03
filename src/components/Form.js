import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "red", "blue", "green"],
    comment: "",
  };

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleColor = (e) => {
    this.setState({
      color: e.target.value,
    });
  };

  handleComments = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Commentaire</h1>
        <form action="">
          <div>
            <label htmlFor="">Pseudo</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlePseudo}
            />
          </div>
          <div>
            <label htmlFor="">Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="">Commentaire</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleComments}
            ></textarea>
          </div>
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

export default Form;
