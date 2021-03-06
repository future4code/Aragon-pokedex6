import { createContext } from "react";
import { GlobalState } from "./global/GlobalState";
import Router from "./routes/Router";
import "./App.css";

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
