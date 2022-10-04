import { Component } from "react";
import "./App.css";
import Car from "./components/Car";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Je suis dans le constructor");

    this.state = {
      name: "Toto",
      step: 1,
      display: true,
    };
  }
  componentDidMount() {
    console.log("Le composant a été monté");
    this.setState({
      step: 2,
    });
  }

  componentWillUnmount() {
    console.log("Le composant a été retiré");
  }

  displayOrHidden = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    console.log("Je suis dans le render");
    const showComponent = this.state.display ? (
      <Car name="Toto 2"></Car>
    ) : (
      <div></div>
    );

    return (
      <div className="App">
        <button onClick={this.displayOrHidden}>
          Enlever le composant du DOM
        </button>
        {showComponent}
      </div>
    );
  }
}

export default App;
