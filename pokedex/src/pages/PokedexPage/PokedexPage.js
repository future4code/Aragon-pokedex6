import React, { useContext } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import { GlobalContext } from "../../global/GlobalContext";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const PokedexPage = () => {
  const { states } = useContext(GlobalContext);

  const { pokedex } = states;

  const PokedexList = pokedex.map((pokemon) => {
    return (
      <PokeCard key={pokemon.id} pokemon={pokemon} currentPage={"pokedex"} />
    );
  });

  return (
    <>
      <Header currentPage={"pokedex"} />
      <Main>{PokedexList}</Main>
    </>
  );
};
