import { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const PokelistPage = () => {
  const { states, getters, setters } = useContext(GlobalContext);
  const { setPage } = setters;
  const { pokeList, pokedex, page } = states;
  const { getData } = getters;

  useEffect(() => {
    getData();
  }, []);

  const changePage = (num) => {
    const nextPage = page + num;

    setPage(nextPage);
    getData(nextPage);
  };

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
      <Nav>
        <h2>Selecione uma página</h2>
        {page !== 1 && (
          <button onClick={() => changePage(-1)}>Voltar página</button>
        )}
        <span> Página: {page} </span>
        {pokeList.length && (
          <button onClick={() => changePage(1)}>Próxima página</button>
        )}
      </Nav>
      <Div>{pokeMap}</Div>
    </section>
  );
};
