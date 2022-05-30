import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToDetails,
  goToPokeList,
  goToPokedex,
  goPreviousPage,
} from "../../routes/coordinator";

export const Header = (props) => {
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (props.currentPage) {
      case "pokelist":
        return (
          <>
            <h1>Pokelist</h1>
            <nav>
              <button onClick={() => goToPokedex(navigate)}>
                Go to Pokedex
              </button>
            </nav>
          </>
        );
      case "pokedex":
        return (
          <>
            <h2>Pokedex</h2>
            <nav>
              <button onClick={() => goToPokeList(navigate)}>
                Go to Pokelist
              </button>
            </nav>
          </>
        );
      case "pokedetails":
        return (
          <>
            <h1>Details</h1>
            <nav>
              <button onClick={() => goPreviousPage(navigate)}>
                Back previous page
              </button>
            </nav>
          </>
        );
      default:
        return;
    }
  };

  return <>{renderHeader()}</>;
};
