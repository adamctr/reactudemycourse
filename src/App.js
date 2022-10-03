import { Component } from "react";
import "./App.css";
import Result from "./components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Result></Result>
      </div>
    );
  }
}

export default App;
