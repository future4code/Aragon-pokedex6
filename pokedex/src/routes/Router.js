import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokedetailsPage } from "../pages/PokedetailsPage/PokedetailsPage";
import { PokelistPage } from "../pages/PokelistPage.js/PokelistPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PokelistPage />} />
        <Route path={"/pokedex"} element={<PokedexPage />} />
        <Route
          path={`/pokemon/:pokeName/details`}
          element={<PokedetailsPage />}
        />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
