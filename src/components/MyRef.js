import React, { Component } from "react";

class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.myTitle = React.createRef();
    this.MyInput = React.createRef();
  }

  update = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addFocus = () => {
    this.MyInput.current.focus();
  };

  componentDidUpdate(prevProps, prevState) {
    this.myTitle.current.style.color = "red";
  }

  render() {
    console.log(this.myTitle);

    return (
      <div>
        <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
        <input
          ref={this.MyInput}
          type="text"
          value={this.state.value}
          onChange={this.update}
        />
      </div>
    );
  }
}

export default MyRef;
