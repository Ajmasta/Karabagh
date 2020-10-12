import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { GApageView } from "./googleAnalytics";
const InfoPanel = ({ image, imageAlt, text, title, id }) => {
  useEffect(() => { GApageView("info"); }, []);
  console.log(text)
  return (
    <Grid
      container
      direction="row"
      className="infoPanel"
      alignContent="center"
      id={id}
    >
      <Grid xs={11} sm={4} className="infoPanelText" justifyContent="center">
      <h2>{title} </h2>
        <div> {text.map(sentence => <p> {sentence} </p>)}</div>
      </Grid>
      <Grid xs={11} sm={6} className="infoPanelImage">
        <img src={image} alt={imageAlt}></img>
      </Grid>
    </Grid>
  );
};

export default InfoPanel;
