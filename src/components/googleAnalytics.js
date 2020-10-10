
import ReactGA from "react-ga"


export const initGA = () => {       
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ID);
  }  

  export const GApageView = (page) => {   
    ReactGA.pageview(page);   
}