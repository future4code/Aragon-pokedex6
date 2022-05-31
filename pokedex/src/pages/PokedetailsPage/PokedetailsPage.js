import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../global/GlobalContext";

export const PokedetailsPage = () => {
  const params = useParams();
  const { states, getters } = useContext(GlobalContext);
    const { pokemon } = states;
    const { getPokeDetails } = getters;

  useEffect(() => {
    getPokeDetails(params.pokeName)
  }, [])

  const pokeDetails = pokemon.name? (
    <>
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
                    )
                })}
            </section>
            <section>
                <h2>Types: </h2>
                {pokemon.types.map((type) => {
                    return(
                        <li key={type}>{type}</li>
                    )
                })}
            </section>
            <section>
                <h2>Abilities: </h2>
                {pokemon.abilities.filter((ability, index) => {
                    if (index < 10) {
                        return {ability}
                    }
                })
                .map((ability) => {
                  return <li key={ability}>{ability}</li>
              })
                }
            </section>
        </>

    ) : <p>Loading...</p>

  return (
    <>
      <Header currentPage={"pokedetails"} />
      <hr />
      <h1>{params.pokeName.toUpperCase()}</h1>
      {pokeDetails}
    </>
  );
};
