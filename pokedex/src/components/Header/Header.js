import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  goToPokeList,
  goToPokedex,
  goPreviousPage,
} from "../../routes/coordinator";

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
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

const Div = styled.div`
  background-color: white;
  width: 100%;
`;

export const Header = (props) => {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.currentPage) {
      case "pokelist":
        return (
          <Main>
            <Section>
              <a href="https://emoji.gg/emoji/pokeball">
                <img
                  src="https://cdn3.emoji.gg/emojis/pokeball.png"
                  width="50px"
                  height="50px"
                  alt="pokeball"
                />
              </a>
              <h2>Pokelist</h2>
            </Section>
            <nav>
              <Button onClick={() => goToPokedex(navigate)}>
                Go to Pokedex
              </Button>
            </nav>
            <hr />
          </Main>
        );
      case "pokedex":
        return (
          <Main>
            <Section>
              <a href="https://emoji.gg/emoji/pokeball">
                <img
                  src="https://cdn3.emoji.gg/emojis/pokeball.png"
                  width="50px"
                  height="50px"
                  alt="pokeball"
                />
              </a>
              <h2>Pokedex</h2>
            </Section>
            <nav>
              <Button onClick={() => goToPokeList(navigate)}>
                Go to Pokelist
              </Button>
            </nav>

            <h2>Pokedex list</h2>
          </Main>
        );
      case "pokedetails":
        return (
          <Main>
            <Section>
              <a href="https://emoji.gg/emoji/pokeball">
                <img
                  src="https://cdn3.emoji.gg/emojis/pokeball.png"
                  width="50px"
                  height="50px"
                  alt="pokeball"
                />
              </a>
              <h2>Poke details</h2>
            </Section>
            <nav>
              <Button onClick={() => goPreviousPage(navigate)}>
                Back previous page
              </Button>
            </nav>
            <hr />
          </Main>
        );
      default:
        return;
    }
  };

  return <Div>{renderHeader()}</Div>;
};
