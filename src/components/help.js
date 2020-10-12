import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { GApageView } from "./googleAnalytics";
import Button from "@material-ui/core/Button"
const Help = () => {
  useEffect(() => { GApageView("help"); }, []);
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
          Donate
        </p>
        <p
          onClick={() => {
            const element = document.getElementById("sign");
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          Sign
        </p>
        <p
          onClick={() => {
            const element = document.getElementById("contact");
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          Contact Politicians
        </p>
      </Grid>
      <Grid item container id="helpMainBody" justifyContent="center">

      <h3> Donate to the Armenian Fund</h3>
      
      <div id="donateButton"><a href="https://www.himnadram.org/en"><Button className="coverButton">Donate</Button></a>
        <p>
        The Armenian Fund aims to provide help with health services, infrastuctures, rural development and housing to Armenians and the people of Karabagh. Making a donation helps the people of Karabagh to rebuild their country and survive. 
        </p>
        
      </div>
      <Grid xs={12} id="sign">
        <h2> Sign Petitions</h2>
      </Grid>

      <div><p>Canada: <a  className="helpLinks"  href="https://petitions.ourcommons.ca/en/Petition/Sign/e-2885">House of Commons Petition</a></p></div>
      <Grid xs={12} id="contact">
        <h2> Contact Politicians Directly</h2>
          <p>USA: <a className="helpLinks" href="https://www.usa.gov/elected-officials"> Contact Elected Officials</a></p>
          <p> Canada: <a className="helpLinks"  href="https://represent.opennorth.ca/"> Find your Representative</a></p>
      </Grid>
   
    </Grid>
    </Grid>
  );
};

export default Help;
