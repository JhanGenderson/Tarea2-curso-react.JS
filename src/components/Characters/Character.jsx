import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonPrimary from "../Common/ButtonPrimary";
import CardActions from "@material-ui/core/CardActions";

const Character = ({ characterId, character_name, thumbnail }) => (
  <Grid item xs={12} sm={5}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h4" align="center">
          {character_name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="450"
        image={thumbnail}
        alt="Characters"
      />
      <CardActions className="button-primary">
        <ButtonPrimary type="details" to={`/v1/public/${characterId}`} />
      </CardActions>
    </Card>
  </Grid>
);
export default Character;
