import React, { useState, useEffect } from "react";

import "./Card.css";
import image from "../../assets/png.png";

function Card() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight - 50);

  const handleResize = () => {
    setWindowHeight(window.innerHeight - 50);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="full-screen-container" style={{ height: windowHeight }}>
      <div className="row lhrow">
        <div className="column lhcolumn1">
          <div className="row lhcol1row1">
            <div className="column lhcol1row1col1">
              <p className="lhtextDocu">Docu&nbsp;</p>
            </div>
            <div className="column lhcol1row1col2">
              <p className="lhtextSafe">Safe</p>
            </div>
          </div>
          <div className="row lhcol1row2">
            <p className="lhtextPara">
              is a powerful free, open <br></br> source tool for working{" "}
              <br></br> with messy data
            </p>
          </div>
        </div>
        <div className="column lhcolumn2">
          <img className="lhimage" src={image} alt="landing page image"></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
