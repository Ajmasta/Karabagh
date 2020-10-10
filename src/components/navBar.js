import React, { useState } from "react";
import logo from "../images/armeniaHeart.png";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
const NavBar = () => {
  // const screenTooSmall = false; //useMediaQuery("(max-width:600px)");
  const [activeTab, setActiveTab] = useState("home");

  return (
    <AppBar position="sticky">
      <Toolbar className="navBar">
        <Grid id="navBarLinks" container alignContent="center">
          <Link
            to="/"
            id={activeTab === "home" ? "activeTab" : ""}
            onClick={() => setActiveTab("home")}
          >
            Conflict{" "}
          </Link>
          <Link
            to="/infos"
            id={activeTab === "infos" ? "activeTab" : ""}
            onClick={() => setActiveTab("infos")}
          >
            {" "}
            Infos{" "}
          </Link>{" "}
          <Link
            to="/news"
            id={activeTab === "news" ? "activeTab" : ""}
            onClick={() => setActiveTab("news")}
          >
            {" "}
            News
          </Link>
          <Link
            to="/help"
            id={activeTab === "help" ? "activeTab" : ""}
            onClick={() => setActiveTab("help")}
          >
            {" "}
            Help
          </Link>{" "}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
