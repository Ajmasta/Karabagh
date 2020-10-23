import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { GApageView } from "./googleAnalytics";
const FaqPanel = ({ text, title,linkText,link }) => {

  return (
    <Grid
      container
      direction="row"
      className="infoPanel"
      alignContent="center"
    >
      <Grid xs={12} className="infoPanelText" >
      <h2>{title}</h2>
        <div>{text.map((sentence,i) => <p key={i}> {sentence} </p>)}</div>
        <div>{linkText} <a href={link} className="helpLinks">Source</a></div>
      </Grid>
    </Grid>
  );
};

export default FaqPanel;
