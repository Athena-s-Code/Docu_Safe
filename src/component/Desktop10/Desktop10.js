import React, { useState } from "react";
import "./Desktop10.css";
import CurvedButton from "../UI/CurvedButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop10() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container">
        <div className="row d11row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Highlighting</span>
            </h3>
          </div>
        </div>
        <div className="row d11row2">
          <div className="column d11col1">
            <div className="row d11col1row1">
              <p className="d11col1row1Topic">Text File</p>
            </div>
            <div className="row d11col1row2">
              <CurvedButton
                text="Browser"
                backgroundColor="#0099ff"
                width="300px"
                height="69px"
              />
            </div>
            <div className="row d11col1row3">
              <CurvedButton
                text="View"
                backgroundColor=" #ffee00"
                width="264px"
                height="60px"
              />
            </div>
          </div>
          <div className="column d11col2">
            <div className="row d11col2row1">
              <div className="d11RadioButtons">
                <label className="d11RadioButtonsLable">
                  <input
                    type="radio"
                    value="PIT Data"
                    checked={selectedOption === "PIT Data"}
                    onChange={handleOptionChange}
                  />
                  PIT Data
                </label>
                <label className="d11RadioButtonsLable">
                  <input
                    type="radio"
                    value="Payment Details"
                    checked={selectedOption === "Payment Details"}
                    onChange={handleOptionChange}
                  />
                  Payement Details
                </label>
                <label className="d11RadioButtonsLable">
                  <input
                    type="radio"
                    value="Agreements"
                    checked={selectedOption === "Agreements"}
                    onChange={handleOptionChange}
                  />
                  Agreements
                </label>
              </div>
            </div>
            <div className="row d11col2row2">
              <CurvedButton
                text="Highlight"
                backgroundColor="#00ff00"
                width="264px"
                height="60px"
              />
            </div>
          </div>
          <div className="column d11col3">
            <div className="row d11col3row1">
              <p className="d11col3row1Topic">Image File</p>
            </div>
            <div className="row d11col3row2">
              <CurvedButton
                text="Browser"
                backgroundColor="#0099ff"
                width="300px"
                height="69px"
              />
            </div>
            <div className="row d11col3row3">
              <CurvedButton
                text="Download"
                backgroundColor="#b82888a8"
                width="264px"
                height="60px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Desktop10;
