import { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const PokelistPage = () => {
  const { states, getters } = useContext(GlobalContext);
  const { pokeList, pokedex } = states;
  const { getData } = getters;

  useEffect(() => {
    getData();
  }, []);

  const pokeMap =
    pokeList.length > 0 ? (
      pokeList
        .filter((pokemon) => {
          for (let poke of pokedex) {
            if (poke.id === pokemon.id) {
              return false;
            }
          }
          return true;
        })
        .map((pokemon) => {
          return (
            <PokeCard
              key={pokemon.name}
              pokemon={pokemon}
              currentPage={"pokelist"}
            />
          );
        })
    ) : (
      <p>Loading...</p>
    );

  return (
    <section>
      <Header currentPage={"pokelist"} />
      <hr />
      <Div>{pokeMap}</Div>
    </section>
  );
};
