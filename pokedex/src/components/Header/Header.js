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
`;

export const Header = (props) => {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.currentPage) {
      case "pokelist":
        return (
          <main>
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
              <button onClick={() => goToPokedex(navigate)}>
                Go to Pokedex
              </button>
            </nav>
          </main>
        );
      case "pokedex":
        return (
          <main>
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
              <button onClick={() => goToPokeList(navigate)}>
                Go to Pokelist
              </button>
            </nav>
          </main>
        );
      case "pokedetails":
        return (
          <main>
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
              <button onClick={() => goPreviousPage(navigate)}>
                Back previous page
              </button>
            </nav>
          </main>
        );
      default:
        return;
    }
  };

  return <>{renderHeader()}</>;
};
