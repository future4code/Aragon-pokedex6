import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Url } from "../constants/urls";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
    const [pokeList, setPokeList] = useState([]);
    const [pokemon, setPokemon] = useState({});

  const getData = () => {
    axios
      .get(`${Url}/list?limit=20&offset=0`)
      .then((res) => {
        setPokeList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getPokeDetails = (pokename) => {
    axios.get(`${Url}/${pokename}`)
    .then((res) => {
      setPokemon(res.data);
    }).catch((err) => {
      console.log(err.message);
    })
  }

//   useEffect(() => {
//     getData();
//   }, []);

  const states = {pokeList, pokemon};
  const setters = { setPokeList, setPokemon };
  const getters = { getData, getPokeDetails }


  return (
    <GlobalContext.Provider value={{states, setters, getters}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
