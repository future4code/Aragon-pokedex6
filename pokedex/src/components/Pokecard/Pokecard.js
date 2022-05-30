import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";

export const PokeCard = (props) => {
  const navigate = useNavigate();

  const { id, name } = props.pokemon;

  return (
    <>
      <p>
        {name.toUpperCase()} - N°: {id}
      </p>
      <br />
      <button>add to pokedex</button>
      <button onClick={() => goToDetails(navigate, name)}>see details</button>
      <hr />
    </>
  );
};
