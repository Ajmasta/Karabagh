import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const CoverPanel = ({ id, text, button, setPageView }) => {
  return (
    <Grid
      xs="12"
      container="true"
      direction="row"
      className="coverPanel"
      alignContent="center"
      id={`coverPanel${id}`}
      justifyContent="center"
    >
      <p className="coverPanelText" id={`coverPanelText${id}`}>
        {text}
      </p>
      <Button color="inherit" onClick={() => setPageView(button.link)}>
        {" "}
        {button.text}{" "}
      </Button>
    </Grid>
  );
};

export default CoverPanel;
