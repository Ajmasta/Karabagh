import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import NavBar from "./components/navBar.js";
import InfoPanel from "./components/infoPanel.js";
import CoverPanel from "./components/coverPanel.js";

import logo from "./logo.svg";
import map1 from "./images/map1.png";
import monastery from "./images/monastery.jpg";
import RegionalMap from "./images/RegionalMap.png";
import "./App.css";
// import GRID
function App() {
  const text = `Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ակ Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա`;
  const url = window.location.pathname;
  const [pageView, setPageView] = useState("home");
  console.log(pageView);
  const pageToDisplay = (pageView) => {
    switch (pageView) {
      case "home":
        return (
          <>
            <CoverPanel
              setPageView={setPageView}
              id="1"
              text={
                "On the 27th of September, Azerbaijan declared war on Armenia to invade Nagorno-Karabagh"
              }
              button={{ text: "Help", link: "help" }}
            />

            <CoverPanel
              setPageView={setPageView}
              id="2"
              text={
                "The conflict has already claimed 903 lives. This year alone, 307 people have died. "
              }
              button={{ text: "Read More", link: "history" }}
            />

            <CoverPanel
              setPageView={setPageView}
              id="1"
              text={
                "We urge world leaders to put pressure on Azerbaijan, Turkey, and Armenia to negotiate peacefully"
              }
              button={{ text: "Help", link: "help" }}
            />
          </>
        );

      case "history":
        return (
          <>
            <InfoPanel
              image={monastery}
              imageAlt={"logo"}
              text={`this is ${url}`}
            />

            <InfoPanel image={RegionalMap} imageAlt={"logo"} text={text} />

            <InfoPanel image={map1} imageAlt={"logo"} text={text} />
          </>
        );

      case "help":
        return <p> help</p>;

      default:
        return "";
    }
  };
  return (
    <Grid className="App" container="true" direction="column" wrap="nowrap">
      <NavBar setPageView={setPageView} />
      {pageToDisplay(pageView)}
    </Grid>
  );
}

export default App;
