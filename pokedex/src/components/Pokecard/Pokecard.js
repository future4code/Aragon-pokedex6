import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/urls";
import { goToDetails } from "../../routes/coordinator";
import { useContext, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";

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

  const renderButton = () => {
    switch (props.currentPage) {
      case "pokelist":
        return <button onClick={() => addToPokedex()}>add to pokedex</button>;
      case "pokedex":
        return <button>delete</button>;
      default:
        return;
    }
  };

  return (
    <main>
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
    </main>
  );
};
