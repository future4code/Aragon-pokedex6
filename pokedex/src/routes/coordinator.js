import React from "react";

export const goToPokeList = (navigate) => {
  navigate("/pokelist");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToDetails = (navigate, pokeName) => {
  navigate(`/pokemon/${pokeName}/details`);
};

//VER ONDE ESSA JOÇA PASSA
export const goPreviousPage = (navigate) => {
  navigate(-1);
};
