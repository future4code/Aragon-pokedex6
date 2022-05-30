import React from "react";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import useRequestData from "../../hooks/useRequestData";

export const PokelistPage = (props) => {
  const [pokemons] = useRequestData("list?limit=20&offset=0", []);

  const pokeList = pokemons.map((pokemon) => {
    return <PokeCard key={pokemon.id} pokemon={pokemon} />;
  });

  return (
    <section>
      <Header currentPage={"pokelist"} />
      <hr></hr>
      {pokeList}
    </section>
  );
};
