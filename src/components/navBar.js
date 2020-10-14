import React, { useEffect, useState } from "react";
import logo from "../images/armeniaHeart.png";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

const NavBar = ({textContent}) => {
  // const screenTooSmall = false; //useMediaQuery("(max-width:600px)");
  const [activeTab, setActiveTab] = useState("home");
  const path = window.location.pathname
  const activeTabDeterminator = () => {
   
    if (path.includes("help")) setActiveTab("help")
    if (path.includes("infos")) setActiveTab("infos")
    if (path.includes("news")) setActiveTab("news")

  }
  useEffect(()=>{
   activeTabDeterminator()

},[path])

  return (
    <AppBar position="sticky">
      <Toolbar className="navBar">
        <Grid id="navBarLinks" container alignContent="center">
          <Link
            to="/"
            id={activeTab === "home" ? "activeTab" : ""}
            onClick={() => {setActiveTab("home");
            window.scroll(0,0)}}
          >
            {textContent.navBar[0]}
          </Link>
          <Link
            to="/infos"
            id={activeTab === "infos" ? "activeTab" : ""}
            onClick={() => {setActiveTab("infos");
            window.scroll(0,0)}}
          >
          
            {textContent.navBar[1]}
          </Link>{" "}
          <Link
            to="/news"
            id={activeTab === "news" ? "activeTab" : ""}
            onClick={() => {setActiveTab("news");
            window.scroll(0,0)}}
          >
            {" "}
            {textContent.navBar[2]}
          </Link>
          <Link
            to="/help"
            id={activeTab === "help" ? "activeTab" : ""}
            onClick={() => {setActiveTab("help");
            window.scroll(0,0)}}
          >
            <span style={{color:"white"}} >  {textContent.navBar[3]}</span>
          
          </Link>{" "}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
