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
      <div className="container14">
        <div className="heading_container14">
          <div className="heading_item14">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="top_container14">
          <div className="item_container14 ">
            <p className="colTopic">Text File</p>
          </div>
          <div className="item_container14">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
          <div className="item_container14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
        </div>
        <div className="middle_container14">
          <div className="item_container_middle14">
          <GradientButton 
                    startGradientColor="rgb(13.16, 168, 10)" // Start color
                    endGradientColor="rgb(0, 196.56, 7.86)" 
                    link="#" 
                    buttonText="Data Classification"
                    height="48px"
                    />
          </div>
        </div>
        <div className="bottom_container14">
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(255, 229.5, 0)"
            endGradientColor="rgb(196.56, 165.11, 0)"
            link="#"
            buttonText="View"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(0, 56.1, 255)"
            endGradientColor="rgb(0, 90.42, 196.56)"
            link="#"
            buttonText="Edit"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(255, 0, 153)"
            endGradientColor="rgb(91, 13, 41.08)"
            link="#"
            buttonText="Share"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgba(209, 39, 252, 1)"
            endGradientColor="rgba(134, 0, 197, 1)"
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
export default Desktop14;
