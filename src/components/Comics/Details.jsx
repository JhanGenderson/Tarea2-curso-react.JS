import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../assets/css/style.css";

const Details = ({ characters }) => (
  <div className="gridDetail">
    <Grid item xs={12} sm={5}>
      {characters.map((character, i) => {
        const { name, comics, thumbnail } = character;
        const { items } = comics;
        return (
          <Card sx={{ maxWidth: 345 }} key={i} style={{ height: "100vh" }}>
            <CardContent>
              <Typography variant="h3" align="center">
                {name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="450"
              image={`${thumbnail.path}.${thumbnail.extension}`}
              alt="Characters"
            />
            <CardContent>
              {items.length ? (
                <Typography variant="h4" align="center">
                  Comics
                </Typography>
              ) : (
                <Typography variant="h4" align="center">
                  Doesn't have comics
                </Typography>
              )}
              {items.map((comic, i) => (
                <Typography variant="subtitle1" key={i} align="center">
                  {comic.name}
                </Typography>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </Grid>
  </div>
);
export default Details;
