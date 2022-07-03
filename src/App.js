import React from "react";
import { ContextProvider } from "./context/ContextProvider";
import GlobalStyle from "./styles/globalStyles";
import {Player , Form} from "./components/organisms";

function App() {

  return (
    <ContextProvider>
      <GlobalStyle />
      <Player />
      <Form />
    </ContextProvider>
  );
}

export default App;
