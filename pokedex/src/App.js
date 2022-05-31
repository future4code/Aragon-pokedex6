import react, { createContext, useState } from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";

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
