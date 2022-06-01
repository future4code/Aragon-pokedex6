import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import { GlobalContext } from "../../global/GlobalContext";

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
      <hr />
      <main>
        <h2>Pokedex list</h2>
        {PokedexList}
      </main>
    </>
  );
};
