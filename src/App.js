import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
import town from "./images/town.jpg"

import Help from "./components/help";
import NewsTile from "./components/newsTile";

import {initGA} from "./components/googleAnalytics"

function App() {
  const history = useHistory()
  const redirect=(path)=>{history.push(path)}
  const text = `Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է: Սկսած 1500-ակ Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության հա`;
  const [textContent, setTextContent] = useState(texts.english);
  const [languageChoice, setLanguageChoice] = useState(true);
  const [expanded,setExpanded] = useState(false)
  const handleTabChange = (panel) => (event, newExpanded)=> { setExpanded(newExpanded? panel:false)}
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
            <Grid container  className="infosPage" justifyContent="center">
        
              <Grid xs="12" className="infoPanelTitle">
                {" "}
                <h2>History</h2>{" "}
              </Grid>

              {/*panel 1*/}
            
              <Accordion expanded={expanded ==="panel1"} onChange={handleTabChange("panel1")} className="accordionTab" >
              <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon" />}>{textContent.infos.history.Panel1.title} </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                  <InfoPanel
                    image={monastery}
                    imageAlt={"logo"}
                    text={textContent.infos.history.Panel1.text}
                    id="history"
              
                  />
                </AccordionDetails>
              </Accordion>
         
         
              <Accordion expanded={expanded ==="panel2"} onChange={handleTabChange("panel2")} className="accordionTab" >
                <AccordionSummary className="accordionSummary"  expandIcon={<ExpandMoreIcon className="expandIcon" />}>{textContent.infos.history.Panel2.title}</AccordionSummary>
                <AccordionDetails className="accordionDetails">
                    <InfoPanel image={RegionalMap} imageAlt={"logo"} text={textContent.infos.history.Panel2.text}/>
                </AccordionDetails>
              </Accordion>
           
           
              <Accordion expanded={expanded ==="panel3"} onChange={handleTabChange("panel3")} className="accordionTab"  >
              <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon"/>}>{textContent.infos.history.Panel3.title}</AccordionSummary>
                <AccordionDetails className="accordionDetails" >
                  <InfoPanel image={RegionalMap} imageAlt={"logo"} text={textContent.infos.history.Panel3.text}/>
                </AccordionDetails>
               </Accordion>
 
 
            
             {/*<Grid xs="12" className="infoPanelTitle">
                {" "}
                <h2>FAQ</h2>{" "}
              </Grid>
              <InfoPanel image={map1} imageAlt={"logo"} text={["test","test"]} id="faq" />*/}
            </Grid>
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <>
              <CoverPanel
                id="1"
                text={textContent.homepage.Panel1}
                button={{ text: "Help", link: "/help" }}
              />
                <CoverPanel
                id="3"
                text={
                  textContent.homepage.Panel3
                }
                button={{ text: "Read The Latest News", link: "/news" }}
              />
              <CoverPanel
                id="2"
                text={
                  textContent.homepage.Panel2
                }
                button={{ text: "Learn More", link: "/infos" }}
              />

            
            </>
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
