import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Character from "./Character";
import Message from "../Common/Message";
import "../../assets/css/style.css";

const CharactersList = ({ text, character }) => (
  <Fragment>
    <Message text={text} />
    <div>
      <Grid container spacing={3} justify="center">
        {character.map((characters) => {
          const { id, name, thumbnail } = characters;
          return (
            <Character
              key={id}
              characterId={id}
              character_name={name}
              thumbnail={`${thumbnail.path}.${thumbnail.extension}`}
            />
          );
        })}
      </Grid>
    </div>
  </Fragment>
);

export default CharactersList;
