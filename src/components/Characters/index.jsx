import React, { Fragment, useContext } from "react";
import { CharactersContext } from "../../contexts/CharactersContext";
import CharactersList from "./CharactersList";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";

const CharactersIndex = () => {
  const { doneFetch, text, characters } = useContext(CharactersContext);

  return (
    <Fragment>
      {doneFetch ? (
        characters.length ? (
          <CharactersList text={text} character={characters} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default CharactersIndex;
