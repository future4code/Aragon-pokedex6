import { useNavigate } from "react-router-dom";
import { Url } from "../../constants/urls";
import { goToDetails } from "../../routes/coordinator";
import { useState } from "react";

export const PokeCard = (props) => {
  const navigate = useNavigate();

  const { id, name } = props.pokemon;

  const [pokemon, setPokemon] = useState({});

  // const getPokemon = () => {
  //   axios
  //     .get(`${Url}/${name}`)
  //     .then((res) => setPokemon(res.data))
  //     .catch((err) => console.error(err.response.data));
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  return (
    <>
      <p>
        {name.toUpperCase()} - N°: {id}
      </p>
      <br />
      <button>add to pokedex</button>
      <button onClick={() => goToDetails(navigate, name)}>see details</button>
      <hr />
    </>
  );
};
