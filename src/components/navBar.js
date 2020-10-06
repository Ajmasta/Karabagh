import React from "react";
import logo from "../images/armeniaHeart.png";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const NavBar = ({ setPageView }) => {
  const screenTooSmall = false; //useMediaQuery("(max-width:600px)");
  return (
    <AppBar position="sticky">
      <Toolbar className="navBar">
        <Grid xs="1" container="true" id="logo">
          <img src={logo} alt="armenian Flag" />
        </Grid>
        {screenTooSmall ? (
          ""
        ) : (
          <Grid xs="11" id="navBarLinks" container="true" alignContent="center">
            <p onClick={() => setPageView("home")}>Conflict </p>{" "}
            <p onClick={() => setPageView("history")}> History </p>{" "}
            <p onClick={() => setPageView("help")}> How to Help</p>{" "}
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
