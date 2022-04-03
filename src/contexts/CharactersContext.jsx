import React, { createContext, useState, useEffect } from "react";
import { characterListGet } from "../constants/index.";

// paso 1
export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  // Definiendo Estados USESTATE
  const [doneFetch, setDoneFetch] = useState();
  const [text, setText] = useState("Characters");
  const [characters, setCharacters] = useState([]);

  // Ciclos de vida USeEFFECT
  useEffect(() => {
    getCharacters();
  }, []);

  // Funciones Logicas
  const getCharacters = () => {
    fetch(characterListGet())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setText(
          data.data.results.length ? "Characters" : "Not Found Character"
        );
        setCharacters(data.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CharactersContext.Provider value={{ doneFetch, text, characters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
