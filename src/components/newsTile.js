import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CoverPanel from "./coverPanel";
import { GApageView } from "./googleAnalytics";

const NewsTile = ({ image, title, description, url }) => {
  useEffect(() => { GApageView("news"); }, []);

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
        <a href={url}>
          <img className="newsImage" src={image} />
        </a>
      </Grid>

      <Grid xs={12} sm={9} container item className="newsText">
        <a href={url}>
          <Grid  className="newsTitleContainer">
            <a  className="newsTitle" href={url}>
              {title}
            </a>
          </Grid>
          <Grid sm={12}>
            <p className="newsDescription">{description}</p>{" "}
          </Grid>
        </a>
      </Grid>
    </Grid>
  );
};

export default NewsTile;
