import React, { useState } from "react";
import "./Desktop14.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop14() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Classification"
        image="dataClassification.png"
        alt="image of data classification"
      ></HeadingBox>
      <div className="container">
        <div className="row row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="row row2">
          <div className="column column1">
            <div className="row column1_row1">
              <p className="colTopic">Text file</p>
              <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    buttonText="Browser"
                    />  
            </div>
            <div className="row column1_row3">
              
            </div>
          </div>

         

          <div className="column column3">
            <div className="row column1_row1">
              <p className="colTopic">Image file</p>
              <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    buttonText="Browser"
                    />  
            </div>
            
            
          </div>
          
        </div>
        <div className="column1_row1">
        <GradientButton 
                    startGradientColor="rgb(13.16, 168, 10)" // Start color
                    endGradientColor="rgb(0, 196.56, 7.86)" 
                    link="#" 
                    buttonText="Data Classification"
                
                    />
           </div>
           <div className="button-container">
           <div className="row row4">
           <div className="button-wrapper">
          <GradientButton
            startGradientColor="rgb(255, 229.5, 0)"
            endGradientColor="rgb(196.56, 165.11, 0)"
            link="#"
            buttonText="View"
          />
          <GradientButton
            startGradientColor="rgb(0, 56.1, 255)"
            endGradientColor="rgb(0, 90.42, 196.56)"
            link="#"
            buttonText="Edit"
          />
          <GradientButton
            startGradientColor="rgb(255, 0, 153)"
            endGradientColor="rgb(91, 13, 41.08)"
            link="#"
            buttonText="Share"
          />
          <GradientButton
            startGradientColor="rgba(209, 39, 252, 1)"
            endGradientColor="rgba(134, 0, 197, 1)"
            link="#"
            buttonText="Download"
          />
          </div>
          </div>
        </div>       
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop14;
