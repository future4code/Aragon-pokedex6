import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import styled from "styled-components";

const Main = styled.main`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

  const removePokemon = () => {
    const newPokedex = pokedex.filter((pokemon) => {
      return id !== pokemon.id;
    });

    setPokedex(newPokedex);
  };

  const renderButton = () => {
    switch (props.currentPage) {
      case "pokelist":
        return <Button onClick={() => addToPokedex()}>add to pokedex</Button>;
      case "pokedex":
        return <Button onClick={() => removePokemon()}>delete</Button>;
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
      <Button onClick={() => goToDetails(navigate, name)}>see details</Button>
      <hr />
    </Main>
  );
};
