import React, { useContext } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import { GlobalContext } from "../../global/GlobalContext";
import "./PokedexPage.css";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
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
    <Section>
      <Header currentPage={"pokedex"} />
      <main className="pokedex">{PokedexList}</main>
    </Section>
  );
};
