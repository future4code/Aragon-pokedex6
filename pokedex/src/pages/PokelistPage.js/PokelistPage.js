import { useContext, useEffect } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Header } from "../../components/Header/Header";
import { PokeCard } from "../../components/Pokecard/Pokecard";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const Button = styled.button`
  margin: 5%;
  border-radius: 10pc;
  &:hover {
    background-color: red;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

const Span = styled.span`
  width: 90px;
`;

export const PokelistPage = () => {
  const { states, getters, setters } = useContext(GlobalContext);
  const { setPage } = setters;
  const { pokeList, pokedex, page } = states;
  const { getData } = getters;

  useEffect(() => {
    if (!pokeList.length) {
      getData(page);
    }
  }, [pokeList]);

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
    <Section>
      <Header currentPage={"pokelist"} />
      <h2>Selecione uma página</h2>
      <Nav>
        {page !== 1 && (
          <Button onClick={() => changePage(-1)}>Voltar página</Button>
        )}
        <Span> Página: {page} </Span>
        {pokeList.length && (
          <Button onClick={() => changePage(1)}>Próxima página</Button>
        )}
      </Nav>
      <Div>{pokeMap}</Div>
    </Section>
  );
};
