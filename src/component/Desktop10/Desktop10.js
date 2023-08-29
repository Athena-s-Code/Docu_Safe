import React, { useState } from "react";
import "./Desktop10.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { useNavigate } from "react-router-dom";

function Desktop10() {
 // const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // function dataHighlightClickHandler() {
  //    navigate("/desktop9/desktop10");
    
  // }

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container10">
        <div className="heading_container10">
          <div className="heading_item10">
            <h3>
              <span className="underline">Data Highlighting</span>
            </h3>
          </div>
        </div>

        <div className="top_container10">
          <div className="item_container10">
            <p className="colTopic">Text File</p>
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
          <div className="item_container_topmiddle10">
            
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
          <div className="item_container10">
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
        
            <div className="middle_container10">
            <div className="item_container_middle10">
            <GradientButton
              startGradientColor="rgb(13.16, 168, 10)" // Start color
              endGradientColor="rgb(0, 196.56, 7.86)"
              link="#"
              height="48px"
              buttonText="Highlight"
            />
          </div>
          </div>
          <div className="bottom_container10">
            
            <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(255, 229.5, 0)" // Start color
              endGradientColor="rgb(196.56, 165.11, 0)"
              link="#"
              height="48px"
              buttonText="View"
            />
            </div>
            <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(209.3, 39.24, 251.81)" // Start color
              endGradientColor="rgb(133.66, 0, 196.56) "
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
