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
          <main>
            <h1>Pokelist</h1>
            <nav>
              <button onClick={() => goToPokedex(navigate)}>
                Go to Pokedex
              </button>
            </nav>
          </main>
        );
      case "pokedex":
        return (
          <main>
            <h2>Pokedex</h2>
            <nav>
              <button onClick={() => goToPokeList(navigate)}>
                Go to Pokelist
              </button>
            </nav>
          </main>
        );
      case "pokedetails":
        return (
          <main>
            <h1>Details</h1>
            <nav>
              <button onClick={() => goPreviousPage(navigate)}>
                Back previous page
              </button>
            </nav>
          </main>
        );
      default:
        return;
    }
  };

  return <>{renderHeader()}</>;
};
