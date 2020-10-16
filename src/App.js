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
import graph1 from "./images/graph1.png"
import destroyedHouse from "./images/DestroyedHouse.jpg"
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

  const createAccordion = (text,title,id) => { 
    return (
      <Accordion expanded={expanded ===id} onChange={handleTabChange(id)} className="accordionTab"  >
      <AccordionSummary className="accordionSummary" expandIcon={<ExpandMoreIcon className="expandIcon"/>}>{title}</AccordionSummary>
        <AccordionDetails className="accordionDetails" >
          <FaqPanel text={text}/>
        </AccordionDetails>
       </Accordion>
    )
  }
  const setLanguage = () => 
{
  const language = navigator.language
  console.log(language)
  if (language.includes("en")) return setTextContent(texts.english)
  if (language.includes("fr")) return setTextContent(texts.french)
  if (language.includes("ru")) return setTextContent(texts.russian)
  return ""
}
  useEffect(()=> {
    setLanguage()
    initGA()},[])
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
                    image={graph1}
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
                  <InfoPanel image={destroyedHouse} imageAlt={"logo"} text={textContent.infos.history.Panel3.text}/>
                </AccordionDetails>
               </Accordion>
 
 
            
             <Grid xs={12} className="infoPanelTitle">
                {" "}
                <h2>{textContent.infos.faq.title}</h2>{" "}
              </Grid>
              {/* FAQ START */}
              {createAccordion(textContent.infos.faq.Panel5.text,textContent.infos.faq.Panel5.title,"panel5" )}
              {createAccordion(textContent.infos.faq.Panel13.text,textContent.infos.faq.Panel13.title,"panel13" )}
              {createAccordion(textContent.infos.faq.Panel6.text,textContent.infos.faq.Panel6.title,"panel6" )}
              {createAccordion(textContent.infos.faq.Panel7.text,textContent.infos.faq.Panel7.title,"panel7" )}
              {createAccordion(textContent.infos.faq.Panel8.text,textContent.infos.faq.Panel8.title,"panel8" )}
              {createAccordion(textContent.infos.faq.Panel9.text,textContent.infos.faq.Panel9.title,"panel9" )}
              {createAccordion(textContent.infos.faq.Panel10.text,textContent.infos.faq.Panel10.title,"panel10" )}
             
              {createAccordion(textContent.infos.faq.Panel12.text,textContent.infos.faq.Panel12.title,"panel12" )}
              {createAccordion(textContent.infos.faq.Panel11.text,textContent.infos.faq.Panel11.title,"panel11" )}
              {createAccordion(textContent.infos.faq.Panel1.text,textContent.infos.faq.Panel1.title,"panel14" )}
              {createAccordion(textContent.infos.faq.Panel2.text,textContent.infos.faq.Panel2.title,"panel15" )}
              {createAccordion(textContent.infos.faq.Panel3.text,textContent.infos.faq.Panel3.title,"panel16" )}
              {createAccordion(textContent.infos.faq.Panel4.text,textContent.infos.faq.Panel4.title,"panel4" )}
              

         
         

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
