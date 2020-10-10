import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const CoverPanel = ({ id, text, button }) => {
  return (
    <Grid
      container
      direction="row"
      className="coverPanel"
      alignContent="center"
      id={`coverPanel${id}`}
    >
      <p className="coverPanelText" id={`coverPanelText${id}`}>
        {text}
      </p>
      <Button
        color="inherit"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {" "}
        {button.text}{" "}
      </Button>
    </Grid>
  );
};

export default CoverPanel;
