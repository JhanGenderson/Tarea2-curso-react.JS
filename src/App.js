import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharactersContextProvider from "./contexts/CharactersContext";
import ComicContextProvider from "./contexts/ComicContext";
import Header from "./components/Common/Header";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import NotFound from "./components/Not Found";
import "./assets/css/style.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        {/* High Order Component */}
        <CharactersContextProvider>
          <Characters />
        </CharactersContextProvider>
      </Route>
      <Route path="/v1/public/:characterId">
        {/* High Order Component */}
        <ComicContextProvider>
          <Comics />
        </ComicContextProvider>
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default App;
