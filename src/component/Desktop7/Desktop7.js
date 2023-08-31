import React, { useState } from "react";
import "./Desktop7.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop7() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Encryption and Decryption"
        image="Data_Encryption&Decryption.png"
        alt="image of data hygiene solution"
      ></HeadingBox>
      <div className="container7">
        <div className="heading_container7">
          <div className="heading_item7">
            <h3>
              <span className="underline">Data Encryption</span>
            </h3>
          </div>
        </div>
        <div className="top_container7">
          <div className="item_container7 ">
            <p className="colTopic">Text File</p>
          </div>
          <div className="item_container7 ">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container7 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="60px"
              buttonText="Browser"
            />
          </div>
          <div className="item_container7 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="60px"
              buttonText="Browser"
            />
          </div>
        </div>
        <div className="middle_container7">
          <div className="item_container_middle7">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              width="1140px"
              buttonText=""
            />
          </div>
        </div>
        <div className="bottom_container7">
          <div className="item_container_last7">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Cancel"
            />
          </div>
          <div className="item_container_last7 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Encrypt"
            />
          </div>
          <div className="item_container_last7 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Share"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop7;
