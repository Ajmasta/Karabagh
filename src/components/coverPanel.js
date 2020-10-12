import React, { useEffect, useState } from "react";import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { GApageView } from "./googleAnalytics";
import { useHistory } from "react-router-dom";
const CoverPanel = ({ id, text, button }) => {
  useEffect(() => { GApageView("landing"); }, []);
  const history = useHistory()
  const redirect=(path)=>{history.push(path)}
  return (
    <Grid
      container
      direction="row"
      className="coverPanel"
      alignContent="center"
      id={`coverPanel${id}`}
  
    >
    <Grid item xs={9}>
      <p className="coverPanelText" id={`coverPanelText${id}`}>
        {text.map(sentences=> <p>{sentences} </p>)}
      </p>
      </Grid>
      <Grid item xs={12}>
      <Button
        color="inherit"
        onClick={()=>redirect(button.link)}
      >
        {" "}
        {button.text}{" "}
      </Button>
      </Grid>
    </Grid>
  );
};

export default CoverPanel;
