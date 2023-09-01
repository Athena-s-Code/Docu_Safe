import React, { useState } from "react";
import "./Desktop11.css";
import GradientButton from "../UI/GradientButton";
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
      <Header></Header>
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container11">
        <div className="heading_container11">
          <div className="heading_item11">
            <h3>
              <span className="underline">Data Hiding</span>
            </h3>
          </div>
        </div>

        <div className="top_container11">
          <div className="item_container11">
            <p className="colTopic">Text File</p>
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
          <div className="item_container_topmiddle11">
            
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
          <div className="item_container11">
            <p className="colTopic">Image File</p>
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
          
        </div>
        
            <div className="middle_container11">
            <div className="item_container_middle11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Hide"
            />
          </div>
          </div>
          <div className="bottom_container11">
            
            <div className="item_container_last11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="View"
            />
            </div>
            <div className="item_container_last11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Download"
            />
            </div>
          </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop10;
