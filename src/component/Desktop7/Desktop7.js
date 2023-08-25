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
        <div className="row row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Encryption</span>
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
                height="60px"
                buttonText="Browser"
              />
            </div>
            <div className="row column1_row3"></div>
          </div>

          <div className="column column3">
            <div className="row column1_row1">
              <p className="colTopic">Image file</p>
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="60px"
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
            height="60px"
            width="1260px"
            buttonText=""
          />
        </div>
        <div className="row3">
          <dev className="column4">
            <GradientButton
              startGradientColor="rgb(255, 230, 0)" // Start color
              endGradientColor="rgb(197, 165, 0)"
              height="60px"
              link="#"
              buttonText="Cancel"
            />
          </dev>
          <dev className="column4">
            <GradientButton
              startGradientColor="rgb(13.16, 168, 10)" // Start color
              endGradientColor="rgb(0, 196.56, 7.86)"
              height="60px"
              link="#"
              buttonText="Encrypt"
            />
          </dev>
          <dev className="column4">
            <GradientButton
              startGradientColor="rgb(209, 39, 252)" // Start color
              endGradientColor="rgb(134, 0, 197)"
              height="60px"
              link="#"
              buttonText="Share"
            />
          </dev>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop7;
