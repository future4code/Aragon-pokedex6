import react, { createContext, useState } from "react";
import { GlobalState } from "./Clobal/GlobalState";
import Router from "./routes/router";

export const StatusContext = createContext();

function App() {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
