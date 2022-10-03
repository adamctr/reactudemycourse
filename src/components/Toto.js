import React from "react";

const Toto = (props) => {
  const btReponseToto =
    props.leState.messageMaman !== null ? (
      <button onClick={props.reponseToto}>Réponse</button>
    ) : (
      <button disabled>Réponse</button>
    );

  console.log(props.leState);

  return (
    <div>
      <h2>{props.name}</h2>
      {btReponseToto}
      <p>{props.leState.messageToto}</p>
    </div>
  );
};

export default Toto;
