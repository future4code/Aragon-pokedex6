import react, { createContext, useState } from "react";
import Router from "./routes/router";

export const StatusContext = createContext();

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
