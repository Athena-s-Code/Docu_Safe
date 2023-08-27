import React, { useState } from "react";
import "./Desktop13.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop13() {
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
                    startGradientColor="rgb(146.62, 0, 0)" // Start color
                    endGradientColor="rgb(255, 86.14, 63.11)" 
                    link="#" 
                    buttonText="Malware Detection"
                
                    />
           </div>
           <div className="column1_row1">
        <GradientButton 
                    startGradientColor="rgb(13.16, 168, 10)" // Start color
                    endGradientColor="rgb(0, 196.56, 7.86)" 
                    link="#" 
                    buttonText="Next >>"
                    />
           </div>          
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop13;
