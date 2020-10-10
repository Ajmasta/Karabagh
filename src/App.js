import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import NavBar from "./components/navBar.js";
import InfoPanel from "./components/infoPanel.js";
import CoverPanel from "./components/coverPanel.js";
import LanguagePicker from "./components/languagePicker.js";
import texts from "./text.json";
import logo from "./logo.svg";
import map1 from "./images/map1.png";
import monastery from "./images/monastery.jpg";
import RegionalMap from "./images/RegionalMap.png";
import "./App.css";

import Help from "./components/help";
import NewsTile from "./components/newsTile";

import {initGA} from "./components/googleAnalytics"

function App() {
  const text = `Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ակ Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա`;
  const [textContent, setTextContent] = useState(texts.english);
  const [languageChoice, setLanguageChoice] = useState(true);
  useEffect(()=> initGA(),[])
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <LanguagePicker
        textContent={textContent}
        setTextContent={setTextContent}
      />
      <Grid className="App" container direction="column" wrap="nowrap">
        <NavBar />

        <Switch>
          <Route path="/news">
            <Grid container direction="column" className="newsTiles">
              <NewsTile
                title={"France, U.S. and Russia to meet on Nagorno-Karabakh"}
                description={
                  "France, the United States and Russia will step up efforts to end fighting between Azeri and ethnic Armenian forces in the South Caucasus by holding talks in Geneva on Thursday, as fears of a regional war grow."
                }
                url={
                  "https://www.reuters.com/article/us-armenia-azerbaijan/france-us-and-russia-to-meet-on-nagorno-karabakh-amid-fears-of-regional-war-idUSKBN26S1F2"
                }
                image={
                  "https://static.reuters.com/resources/r/?m=02&d=20201007&t=2&i=1536576497&r=LYNXMPEG9622M"
                }
              />
              <NewsTile
                title={"France, U.S. and Russia to meet on Nagorno-Karabakh"}
                description={
                  "France, the United States and Russia will step up efforts to end fighting between Azeri and ethnic Armenian forces in the South Caucasus by holding talks in Geneva on Thursday, as fears of a regional war grow."
                }
                url={
                  "https://www.reuters.com/article/us-armenia-azerbaijan/france-us-and-russia-to-meet-on-nagorno-karabakh-amid-fears-of-regional-war-idUSKBN26S1F2"
                }
                image={
                  "https://static.reuters.com/resources/r/?m=02&d=20201007&t=2&i=1536576497&r=LYNXMPEG9622M"
                }
              />
            </Grid>
          </Route>
          <Route path="/infos">
            <>
              <Grid className="historySelector">
                <p
                  onClick={() => {
                    const element = document.getElementById("history");
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest",
                    });
                  }}
                >
                  History
                </p>
                <p
                  onClick={() => {
                    const element = document.getElementById("faq");
                    element.scrollIntoView();
                  }}
                >
                  FAQ
                </p>
              </Grid>
              <Grid xs="12" className="infoPanelTitle">
                {" "}
                <h2>History</h2>{" "}
              </Grid>
              <InfoPanel
                image={monastery}
                imageAlt={"logo"}
                text={`In 1991, as the USSR fell, new countries were created. The division of countries was messy. Many problems ensued.`}
                id="history"
                title={"History"}
              />

              <InfoPanel image={RegionalMap} imageAlt={"logo"} text={text} />
              <InfoPanel image={RegionalMap} imageAlt={"logo"} text={text} />
              <InfoPanel image={RegionalMap} imageAlt={"logo"} text={text} />
              <Grid xs="12" className="infoPanelTitle">
                {" "}
                <h2>FAQ</h2>{" "}
              </Grid>
              <InfoPanel image={map1} imageAlt={"logo"} text={text} id="faq" />
            </>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <>
              <CoverPanel
                id="1"
                text={textContent.homepage.Panel1}
                button={{ text: "Help", link: "help" }}
              />

              <CoverPanel
                id="2"
                text={
                  "The conflict has already claimed 903 lives. This year alone, 307 people have died. "
                }
                button={{ text: "Read More", link: "history" }}
              />

              <CoverPanel
                id="1"
                text={
                  "We urge world leaders to put pressure on Azerbaijan, Turkey, and Armenia to negotiate peacefully"
                }
                button={{ text: "Help", link: "help" }}
              />
            </>
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
