import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Url } from "../constants/urls";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 20;

  const getData = async (currentPage) => {
    try {
      const res = await axios.get(
        `${Url}/list?limit=${limit}&offset=${limit * (currentPage - 1)}`
      );
      const requests = res.data.map((item) => axios.get(`${Url}/${item.name}`));

      const responses = await Promise.all(requests);
      const list = responses.map((item) => item.data);
      setPokeList(list);
    } catch (err) {
      console.error("Erro ao buscar lista de pokemons");
    }
  };

  const states = { pokeList, pokedex, page };
  const setters = { setPokeList, setPokedex, setPage };
  const getters = { getData };

  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
