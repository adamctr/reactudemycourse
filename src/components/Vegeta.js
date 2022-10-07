import React, { Component } from "react";
import vegeta from "../vegeta.png";
import CountHits from "./countHits";

class Vegeta extends Component {
  render() {
    const { name, addOneHit, hocState, life } = this.props;
    const isLiving = life <= 0 ? <td>Mort</td> : <td>{life}</td>;
    const button =
      life <= 0 ? (
        <button disabled onClick={addOneHit}>
          {name} Frappe
        </button>
      ) : (
        <button onClick={addOneHit}>{name} Frappe</button>
      );
    return (
      <div className="vegeta">
        <img style={{ width: "200px" }} src={vegeta} alt="vegeta" />
        <br />
        <table>
          <thead>
            <tr>
              <th scope="col">Coups</th>
              <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <td>{hocState.hits}</td>
            {isLiving}
          </tbody>
        </table>
        {button}
      </div>
    );
  }
}

export default CountHits(Vegeta);
