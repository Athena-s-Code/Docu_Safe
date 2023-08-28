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
      <div className="container">
        <div className="heading_container">
          <div className="heading_iteam">
            <h3>
              <span className="underline">Data Encryption</span>
            </h3>
          </div>
        </div>
        <div className="top_container1">
          <div className="iteam_container ">
            <p className="colTopic">Text File</p>
          </div>
          <div className="iteam_container ">
            <p className="colTopic">Image File</p>
          </div>
          <div className="iteam_container ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="60px"
              buttonText="Browser"
            />
          </div>
          <div className="iteam_container ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="60px"
              buttonText="Browser"
            />
          </div>
        </div>
        <div className="middle_container">
          <div className="iteam_container_middle">
            <GradientButton
              startGradientColor="rgb(146.62, 0, 0)" // Start color
              endGradientColor="rgb(255, 86.14, 63.11)"
              link="#"
              height="48px"
              width="1160px"
              buttonText=""
            />
          </div>
        </div>
        <div className="bottom_container">
          <div className="iteam_container ">
            <GradientButton
              startGradientColor="rgb(255, 230, 0)" // Start color
              endGradientColor="rgb(197, 165, 0)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Cancel"
            />
          </div>
          <div className="iteam_container ">
            <GradientButton
              startGradientColor="rgb(13.16, 168, 10)" // Start color
              endGradientColor="rgb(0, 196.56, 7.86)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Encrypt"
            />
          </div>
          <div className="iteam_container ">
            <GradientButton
              startGradientColor="rgb(209, 39, 252)" // Start color
              endGradientColor="rgb(134, 0, 197)"
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
