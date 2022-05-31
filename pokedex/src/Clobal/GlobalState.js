import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Url } from "../constants/urls";

export const GlobalContext = createContext();

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState();

  const getData = () => {
    axios
      .get(`${Url}/list?limit=20&offset=0`)
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const states = {
    pokemons: pokemons,
    setPokemons: setPokemons,
    getData: getData,
  };

  const context = { states };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
