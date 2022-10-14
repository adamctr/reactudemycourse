import React from "react";
import { useReducer } from "react";

const Count = () => {
  const initialState = {
    countOne: 0,
    countTwo: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, countOne: state.countOne + action.value };
      case "decrement":
        return { ...state, countOne: state.countOne - action.value };

      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.countOne}</div>;
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
    </>
  );
};

export default Count;
