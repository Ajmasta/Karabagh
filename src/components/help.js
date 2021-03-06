import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { GApageView, GAButtonClick } from "./googleAnalytics";
import Button from "@material-ui/core/Button"
const Help = ({textContent}) => {
  useEffect(() => { GApageView("help"); }, []);
  const [letterVisible,setLetterVisible] = useState(false)
  return (
    <Grid
      container
      direction="row"
      alignContent="center"
      justifyContent="center"
      id="helpPage"
    >
      <Grid xs={12} className="historySelector">
        <p
          onClick={() => {
            const element = document.getElementById("donate");
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          {textContent.help.titles[0]}
        </p>
        <p
          onClick={() => {
            const element = document.getElementById("sign");
            element.scrollIntoView();
          }}
        >
           {textContent.help.titles[1]}
        </p>
        <p
          onClick={() => {
            const element = document.getElementById("contact");
            element.scrollIntoView();
          }}
        >
          {textContent.help.titles[2]}
        </p>
      </Grid>
      <Grid item container id="helpMainBody" justifyContent="center">

      <Grid xs={12} id="donate"> <h2>  {textContent.help.titles[0]}</h2></Grid>
      <h3>The Armenian Fund</h3>
      <div id="donateButton">
      <a onClick={()=> GAButtonClick("Button","click","Armenian Fund")} href="https://armeniafund.ejoinme.org/donate">
        <Button className="helpButton">{textContent.help.buttons[0]}</Button></a>
        <p>
        {textContent.help.explanation[0]}
        </p>
        <h3>Hayastan All Armenian Fund</h3>
        </div>
        <div id="donateButton">
        <a  onClick={()=> GAButtonClick("Button","click","Hayastan All Armenian Fund")} href="https://www.himnadram.org/en">
        <Button className="helpButton">{textContent.help.buttons[0]}</Button></a>
        <p>
        {textContent.help.explanation[1]} 
         </p>
        </div>
     
      


      <Grid xs={12} id="sign">
        <h2>  {textContent.help.titles[1]}</h2>
      </Grid>

      <div>
      <p> Worldwide: <a onClick={()=> GAButtonClick("Link","click","House of Commons Petition ")} className="helpLinks" href="https://www.change.org/p/usaid-get-aid-to-armenia-and-artsakh-as-azerbaijan-breaches-our-borders?utm_content=cl_sharecopy_23468153_en-US%3A3&recruiter=898192652&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition">Get Aid to Armenia and Artsakh as Azerbaijan breaches our borders</a></p>
      <p>Canada: <a onClick={()=> GAButtonClick("Link","click","House of Commons Petition ")} className="helpLinks"  href="https://petitions.ourcommons.ca/en/Petition/Sign/e-2885">
      House of Commons Petition</a> 
    
      </p> <p> USA: <a onClick={()=> GAButtonClick("Link","click","White House Petition ")} className="helpLinks"  href="https://petitions.whitehouse.gov/petition/expel-turkey-nato-warn-turkey-and-azerbaijan-against-committing-new-genocide-against-armenia?fbclid=IwAR17nzQWZoyn8wcAuaIrQaX0KRdX6OSMrehxqjpMF3qI0ZpLZYvVjR9c7c4">
      White House Petition to Remove Turkey from NATO </a> <br /> <a onClick={()=> GAButtonClick("Link","click","White House Petition - Azerbaijan Aggression ")} className="helpLinks"  href="https://petitions.whitehouse.gov/petition/condemn-aggression-turkey-and-azerbaijan-against-artsakh-armenia">Condemn Azerbaijan's Aggression of Armenia</a></p></div>
      
      <Grid xs={12} id="contact">
      <h2> {textContent.help.titles[2]}</h2>
      
        <h3> {textContent.help.subtitles[0]}</h3>
        <p> {textContent.help.explanation[2]}</p>
          <p>USA: <a className="helpLinks" href="https://marchtojustice.org/condemn-azerbaijan/issue-form/0/0"> Automatically Contact Elected Officials</a></p>
          <p> Canada: <a className="helpLinks"  href="https://represent.opennorth.ca/"> Find your Representative</a> <br/>   
      United Armenians: <a onClick={()=> GAButtonClick("Link","click","United Armenians ")} className="helpLinks"  href="https://unitedarmenians.ca/action-alerts/"> Easily Email Politicians in Canada </a>  </p>
          <p> Europe: <a className="helpLinks"  href="https://www.consilium.europa.eu/en/contact/general-enquiries/send-message/?IsPresident=true&__cf_chl_jschl_tk__=5243439a02c1d4054d9a6a16f9da7de5252b61c3-1602566947-0-AdSepdZw7bsaaPyUN4N5SnzVS4xs0-UsK_lLKivAOfi1REtWGrOBI5BdvU5GKesLxxIJcQWNQCFz1wPkGfrDFKLMvZPTuOqjPtPpfPPAJFXpE5uAXNnX3svzZS5xMbw-AyrgUOxMG6tLBwWt7BkwzbLvbzDOeVDYX9vdJHBYfUl1iBiFtb4QO8DrU82CFt6kL_us5SslcqXUk82VyyX7EYqMjp11Yfz4oJdc-duKfup0Ki9LS2Elc6faP_tLWjdH263TBLt3HXU6rhzmhJq9dAiuVZLrPAaqkR44wtR_994FXUX1mPblVKf_NHzHaqqpTL2JQjY-g6LejkXPyRio0kS5aKnt8S1D4bmPwwuwlgK6"> European Council</a></p>
          <p>UK: <a className="helpLinks" href="https://members.parliament.uk/FindYourMP"> Find your MP</a> </p>
          <Button className="coverButton" onClick={()=>setLetterVisible(!letterVisible)}> {textContent.help.buttons[1]} </Button>  {letterVisible? <div style={{border:"1px solid black"}} >{textContent.help.letter.map(sentence=> <p> {sentence}</p>)} </div>:""}

          <h3>{textContent.help.subtitles[1]}</h3>
          <p> {textContent.help.explanation[3]}</p>
      </Grid>
   
    </Grid>
    </Grid>
  );
};

export default Help;
