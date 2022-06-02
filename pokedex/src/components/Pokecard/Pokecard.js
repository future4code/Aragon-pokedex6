import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/urls";
import { goToDetails } from "../../routes/coordinator";
import { useContext, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";

const Main = styled.main`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.05);
  }
`;

export const PokeCard = (props) => {
  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalContext);

  const { pokedex } = states;

  const { setPokedex } = setters;

  const { id, name, images } = props.pokemon;

  const addToPokedex = () => {
    const newPokedex = [...pokedex, props.pokemon];
    setPokedex(newPokedex);
  };
  // const getPokemon = () => {
  //   axios
  //     .get(`${Url}/${name}`)
  //     .then((res) => setPokemon(res.data))
  //     .catch((err) => console.error(err.response.data));
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  const removePokemon = () => {
    const newPokedex = pokedex.filter((pokemon) => {
      return id !== pokemon.id;
    });

    setPokedex(newPokedex);
  };

  const renderButton = () => {
    switch (props.currentPage) {
      case "pokelist":
        return <button onClick={() => addToPokedex()}>add to pokedex</button>;
      case "pokedex":
        return <button onClick={() => removePokemon()}>delete</button>;
      default:
        return;
    }
  };

  return (
    <Main>
      <p>
        {name.toUpperCase()} - N°: {id}
      </p>
      <figure>
        <img src={images.front} alt={`Foto frontal de ${name}`}></img>
      </figure>
      <br />
      {renderButton()}
      <button onClick={() => goToDetails(navigate, name)}>see details</button>
      <hr />
    </Main>
  );
};
