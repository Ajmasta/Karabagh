import React from "react";
import Grid from "@material-ui/core/Grid";
const InfoPanel = ({ image, imageAlt, text }) => {
  return (
    <Grid
      container="true"
      direction="row"
      className="infoPanel"
      alignContent="center"
    >
      <Grid xs="11" sm="4" className="infoPanelText" justifyContent="center">
        <div> {text}</div>
      </Grid>
      <Grid xs="11" sm="6" className="infoPanelImage">
        <img src={image} alt={imageAlt}></img>
      </Grid>
    </Grid>
  );
};

export default InfoPanel;
