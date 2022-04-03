import React, { Fragment, useContext } from "react";
import { ComicContext } from "../../contexts/ComicContext";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";
import ButtonPrimary from "../Common/ButtonPrimary";
import Details from "./Details";

const Comics = () => {
  const { doneFetchDetail, characters } = useContext(ComicContext);
  return (
    <Fragment>
      {doneFetchDetail ? (
        Array.isArray(characters) ? (
          <Details characters={characters} />
        ) : (
          <Message text="No Results" />
        )
      ) : (
        <ProgressBar />
      )}
      <ButtonPrimary type="back" to="/" />
    </Fragment>
  );
};

export default Comics;
