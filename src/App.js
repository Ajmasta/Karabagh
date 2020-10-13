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
import FaqPanel from "./components/faqPanel"
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
  const newsGenerator = () => {
   
    let newsPage = []
    for(let i=1;i<=16;i++){
     
      newsPage.push(<NewsTile key={i} image={textContent.news[i].image} description={textContent.news[i].description} title={textContent.news[i].title} url={textContent.news[i].url} />)
    }
    return newsPage
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <LanguagePicker
        textContent={textContent}
        setTextContent={setTextContent}
      />
      <Grid className="App" container direction="column" wrap="nowrap">
        <NavBar textContent={textContent} />

        <Switch>
          <Route path="/news">
            <Grid container direction="column" className="newsTiles">
            { newsGenerator()}
            </Grid>
          </Route>
          <Route path="/infos">
            <Grid container  className="infosPage" >
        
              <Grid item xs={12} className="infoPanelTitle">
                {" "}
                <h2>{textContent.infos.history.title}</h2>{" "}
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
 
 
            
             <Grid xs={12} className="infoPanelTitle">
                {" "}
                <h2>{textContent.infos.faq.title}</h2>{" "}
              </Grid>
              <Accordion expanded={expanded ==="panel4"} onChange={handleTabChange("panel4")} className="accordionTab" >
              <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon" />}>{textContent.infos.faq.Panel1.title} </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                  <FaqPanel
                    image={monastery}
                    imageAlt={"logo"}
                    text={textContent.infos.faq.Panel1.text}
                    id="history"
              
                  />
                </AccordionDetails>
              </Accordion>
         
         
              <Accordion expanded={expanded ==="panel5"} onChange={handleTabChange("panel5")} className="accordionTab" >
                <AccordionSummary className="accordionSummary"  expandIcon={<ExpandMoreIcon className="expandIcon" />}>{textContent.infos.faq.Panel2.title}</AccordionSummary>
                <AccordionDetails className="accordionDetails">
                    <FaqPanel  text={textContent.infos.faq.Panel2.text}/>
                </AccordionDetails>
              </Accordion>
           
           
              <Accordion expanded={expanded ==="panel6"} onChange={handleTabChange("panel6")} className="accordionTab"  >
              <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon"/>}>{textContent.infos.faq.Panel3.title}</AccordionSummary>
                <AccordionDetails className="accordionDetails" >
                  <FaqPanel text={textContent.infos.faq.Panel3.text}/>
                </AccordionDetails>
               </Accordion>

               <Accordion expanded={expanded ==="panel7"} onChange={handleTabChange("panel7")} className="accordionTab"  >
              <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon"/>}>{textContent.infos.faq.Panel4.title}</AccordionSummary>
                <AccordionDetails className="accordionDetails" >
                  <FaqPanel  text={textContent.infos.faq.Panel4.text}/>
                </AccordionDetails>
               </Accordion>

            </Grid>
          </Route>
          <Route path="/help">
            <Help textContent={textContent} />
          </Route>
          <Route path="/">
            <>
              <CoverPanel
                id="1"
                text={textContent.homepage.Panel1}
                button={{ text: textContent.homepage.buttons[0], link: "/help" }}
              />
                <CoverPanel
                id="3"
                text={
                  textContent.homepage.Panel3
                }
                button={{ text:  textContent.homepage.buttons[1], link: "/news" }}
              />
              <CoverPanel
                id="2"
                text={
                  textContent.homepage.Panel2
                }
                button={{ text:  textContent.homepage.buttons[2], link: "/infos" }}
              />

            
            </>
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
