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
        <div className="container13">
        <div className="heading_container13">
          <div className="heading_item13">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="top_container13">
          <div className="item_container13 ">
            <p className="colTopic">Text File</p>
          </div>
          <div className="item_container13">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container13">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
          <div className="item_container13">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            />
          </div>
        </div>
        <div className="middle_container13">
          <div className="item_container_middle13">
            <GradientButton
              startGradientColor="rgb(146.62, 0, 0)" // Start color
              endGradientColor="rgb(255, 86.14, 63.11)"
              link="/desktop12/desktop13/desktop14" 
              height="48px"
              width="1140px"
              buttonText="Malware Detection"
            />
          </div>
        </div>
        <div className="bottom_container13">
          <div className="item_container_last13">
            <GradientButton
              startGradientColor="rgb(13.16, 168, 10)" // Start color
              endGradientColor="rgb(0, 196.56, 7.86)"
              height="48px"
              width="160px"
              link="/desktop12/desktop13/desktop14" 
              buttonText="Next >>"
            />
          </div>
          
        </div>         
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop13;
