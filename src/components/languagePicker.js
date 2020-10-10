import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import texts from "../text.json";
const LanguagePicker = ({ textContent, setTextContent }) => {
  const [languageChoice, setLanguageChoice] = useState(true);
  return (
    <>
      {languageChoice ? (
        <div id="languageSelection">
          <ArrowForwardIosIcon onClick={() => setLanguageChoice(false)} />
          {textContent === texts.english ? (
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.french)}
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.russian)}
              ></img>{" "}
            </>
          ) : textContent === texts.french ? (
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1920px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.english)}
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.russian)}
              ></img>{" "}
            </>
          ) : (
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1920px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.english)}
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png"
                width="40px"
                height="auto"
                onClick={() => setTextContent(texts.french)}
              ></img>
            </>
          )}
        </div>
      ) : (
        <ArrowBackIosIcon
          id="languageArrow"
          onClick={() => setLanguageChoice(true)}
        />
      )}
    </>
  );
};
export default LanguagePicker;
