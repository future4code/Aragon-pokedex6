import { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";

export const PokelistPage = () => {
  const { states, getters } = useContext(GlobalContext) 
  const { pokeList } = states;
  const { getData } = getters;

  useEffect(() => {
    getData()
  },[]);

  const pokeMap = pokeList.length > 0? pokeList.map((pokemon) => {
    return <PokeCard key={pokemon.id} pokemon={pokemon} />;
  })
  : <p>Loading...</p>

  return (
    <section>
      <Header currentPage={"pokelist"} />
      <hr/>
      {pokeMap}
    </section>
  );
};
