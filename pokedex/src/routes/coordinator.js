import React from "react";

export const goToPokeList = (navigate) => {
    navigate("/")
};

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
};

export const goToDetails = (navigate, pokeID) => {
    navigate(`/pokemon/${pokeID}/details`)
};

//VER ONDE ESSA JOÇA PASSA
export const goPreviousPage = (navigate) =>{
    navigate(-1)
};