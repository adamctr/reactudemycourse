import React, { Component } from "react";
import Users from "./Singers";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Musiciens</h1>
        <Users name="Eric Clapton" age="74"></Users>
        <Users name="Jimi Hendrix" age="23"></Users>
        <Users name="Maxenss" age="35"></Users>
        <Users name="PNL" age="25"></Users>
      </div>
    );
  }
}

export default Display;
