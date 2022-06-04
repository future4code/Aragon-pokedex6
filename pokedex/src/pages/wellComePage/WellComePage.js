import React from "react";
import "./WellComePage.css";
import { useNavigate } from "react-router-dom";
import { goToPokeList } from "../../routes/coordinator";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const H2 = styled.h2`
  font-weight: 900;
  font-size: 2em;
  color: #ffd83c;
  text-shadow: 2px 2px #3663ad;
  margin: 2%;
`;

const H1 = styled.h1`
  margin: 2%;
  font-weight: 900;
  font-size: 2em;
  color: #ffd83c;
  text-shadow: 2px 2px #3663ad;
`;

export const WellComePage = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <Section>
        <img
          className="pokeimg"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          }
        />
      </Section>
      <div className="center-on-page">
        <div className="pokeball">
          <div
            className="pokeball__button"
            onClick={() => {
              goToPokeList(navigate);
            }}
          ></div>
        </div>
      </div>
      <section className="wellcome">
        <H1>Wellcome to Pokelist</H1>
        <H2>Click on Pokeball</H2>
      </section>
    </div>
  );
};
