import React, { createContext, useState, useEffect } from "react";
import { characterDetailGet } from "../constants/index.";

export const ComicContext = createContext();

const ComicContextProvider = ({ children }) => {
  const characterId = window.location.pathname.split("/")[3];
  const [doneFetchDetail, setDoneFetchDetail] = useState(false);
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    getCharacterDetail(characterId);
  }, [characterId]);

  const getCharacterDetail = (characterId) => {
    fetch(characterDetailGet(characterId))
      .then((res) => res.json())
      .then((data) => {
        const { results } = data.data;
        setDoneFetchDetail(true);
        !Array.isArray(results[0]) && setCharacters(results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ComicContext.Provider value={{ doneFetchDetail, characters }}>
      {children}
    </ComicContext.Provider>
  );
};

export default ComicContextProvider;
