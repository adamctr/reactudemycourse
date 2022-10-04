import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Form extends Component {
  render() {
    return (
      <div>
        <Title>Commentary</Title>
        <button>Valider</button>
      </div>
    );
  }
}

export default Form;
