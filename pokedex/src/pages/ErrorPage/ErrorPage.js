import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPokeList } from "../../routes/coordinator";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  font-size: 1.5em;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 7%;
  margin: 1%;
  border-radius: 10pc;
  font-size: 1em;
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

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Section>
        <a href="https://emoji.gg/emoji/pokeball">
          <img
            src="https://cdn3.emoji.gg/emojis/pokeball.png"
            width="50px"
            height="50px"
            alt="pokeball"
          />
        </a>
        <h2>Poke error</h2>
      </Section>
      <Button onClick={() => goToPokeList(navigate)}>Back to Pokelist</Button>
    </Div>
  );
};
