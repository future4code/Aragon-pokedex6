import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Url } from "../constants/urls";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${Url}/list?limit=151   &offset=0`);
      const requests = res.data.map((item) => axios.get(`${Url}/${item.name}`));

      const responses = await Promise.all(requests);
      const list = responses.map((item) => item.data);
      setPokeList(list);
    } catch (err) {
      console.error("Erro ao buscar lista de pokemons");
    }
  };

  // const getData = () => {
  //   axios
  //     .get(`${Url}/list?limit=20&offset=0`)
  //     .then((res) => {
  //       setPokeList(res.data);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };

  // const getPokeDetails = (pokename) => {
  //   axios
  //     .get(`${Url}/${pokename}`)
  //     .then((res) => {
  //       setPokemon(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const states = { pokeList, pokedex };
  const setters = { setPokeList, setPokedex };
  const getters = { getData };

  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
