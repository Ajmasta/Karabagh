import React from "react";
import Grid from "@material-ui/core/Grid";
import CoverPanel from "./coverPanel";

const NewsTile = ({ image, title, description, url }) => {
  return (
    <Grid
      xs={11}
      sm={9}
      md={8}
      direction="row"
      item
      container
      className="newsTile"
    >
      <Grid xs={12} sm={3} container alignItems="center" justifyItems="center">
        <img className="newsImage" src={image} />
      </Grid>
      <Grid xs={12} sm={9} container item className="newsText">
        <Grid>
          <a className="newsTitle" href={url}>
            {title}
          </a>
        </Grid>
        <Grid sm={12}>
          <p className="newsDescription">{description}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsTile;
