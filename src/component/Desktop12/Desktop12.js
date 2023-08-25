import React, { useState } from "react";
import "./Desktop12.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import imageSrc from '../..//assets/dataClassification2.png';

function Desktop12() {
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
            <div className="label">
            <p className="text-wrapper">
            Data Classification is a crucial task in the field of data science and it’s importance has increased significantly with the rise of digital data. In here we classify data from text document format and image format.
            </p>
        </div>
            </div>
            
          </div>

          
          <div className="row column2_row1">
            <div className="horizontal-line"></div>
             
            
          </div>

          <div className="column column3">
            <div className="row column1_row1">
            

                <img src={imageSrc} alt="Image" className="image" />
                <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    buttonText="Next"
                      />    
            </div>
          </div>
        </div>

         
       
      </div>
      
      <Footer></Footer>
    </div>
  );
}
export default Desktop12;
