import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const PokedetailsPage = () => {
  const params = useParams();

  return (
    <>
      <Header currentPage={"pokedetails"} />
      <hr />
      <h1>{params.pokeName.toUpperCase()}</h1>
    </>
  );
};
