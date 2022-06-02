import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { Url } from "../../constants/urls";
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  align-content: center;
  text-align: center;
`;

export const PokedetailsPage = () => {
  const params = useParams();
  const { states } = useContext(GlobalContext);
  const [pokemon, setPokemon] = useState({});

  const getPokeDetails = (pokename) => {
    axios
      .get(`${Url}/${pokename}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPokeDetails(params.pokeName);
  }, []);

  const pokeDetails = pokemon.name ? (
    <nav>
      <hr></hr>
      <figure>
        <img src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
        <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} />
      </figure>
      <section>
        <h2>Status:</h2>
        {pokemon.status.map((item) => {
          return (
            <div key={item["status_name"]}>
              <span>{item["status_name"].toUpperCase()}: </span>
              <span>{item.value}</span>
              <br />
            </div>
          );
        })}
      </section>
      <section>
        <h2>Types: </h2>
        {pokemon.types.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </section>
      <section>
        <h2>Abilities: </h2>
        {pokemon.abilities
          .filter((ability, index) => {
            if (index < 10) {
              return { ability };
            }
          })
          .map((ability) => {
            return <li key={ability}>{ability}</li>;
          })}
      </section>
    </nav>
  ) : (
    <p>Loading...</p>
  );

  return (
    <div>
      <Header currentPage={"pokedetails"} />
      <hr></hr>
      <Main>
        <h1>{params.pokeName.toUpperCase()}</h1>
        {pokeDetails}
      </Main>
    </div>
  );
};
