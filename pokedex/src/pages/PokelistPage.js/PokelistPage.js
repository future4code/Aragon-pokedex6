import { useContext } from "react";
import { GlobalContext } from "../../Clobal/GlobalState";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";

export const PokelistPage = (props) => {
  const context = useContext(GlobalContext);
  const { pokemons } = context.states;

  const pokeList = pokemons.map((pokemon) => {
    return <PokeCard key={pokemon.id} pokemon={pokemons} />;
  });

  return (
    <section>
      <Header currentPage={"pokelist"} />
      <hr></hr>
      {pokeList}
    </section>
  );
};
