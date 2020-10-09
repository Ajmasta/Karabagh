import React from "react";
import logo from "../images/armeniaHeart.png";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const NavBar = ({ setPageView }) => {
  // const screenTooSmall = false; //useMediaQuery("(max-width:600px)");
  return (
    <AppBar position="sticky">
      <Toolbar className="navBar">
        <Grid id="navBarLinks" container alignContent="center">
          <p
            onClick={() => {
              setPageView("home");
              window.scroll(0, 0);
            }}
          >
            Conflict{" "}
          </p>{" "}
          <p
            onClick={() => {
              setPageView("history");
              window.scroll(0, 0);
            }}
          >
            {" "}
            Infos{" "}
          </p>{" "}
          <p
            onClick={() => {
              setPageView("news");
              window.scroll(0, 0);
            }}
          >
            {" "}
            News
          </p>{" "}
          <p
            onClick={() => {
              setPageView("help");
              window.scroll(0, 0);
            }}
          >
            {" "}
            Help
          </p>{" "}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
