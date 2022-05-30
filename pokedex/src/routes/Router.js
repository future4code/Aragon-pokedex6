import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokedetailsPage } from "../pages/PokedetailsPage/PokedetailsPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokelistPage } from "../pages/PokelistPage.js/PokelistPage";

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index path={"/"}element={<PokelistPage/>}/>
            <Route path={"/pokedex"} element={<PokedexPage/>}/>
            <Route path={`/pokemon/:pokeID/details`} element={<PokedetailsPage/>}/>
            <Route path={"*"} element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}