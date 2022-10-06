import { Component } from "react";
import "./App.css";
import React from "react";
import MyRef from "./components/MyRef";

class App extends Component {
  constructor(props) {
    super(props);

    this.refComp = React.createRef();
  }

  handleClick = () => {
    this.refComp.current.addFocus();
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <MyRef ref={this.refComp}></MyRef>
        <button onClick={this.handleClick}>Focus !</button>
      </div>
    );
  }
}

export default App;
