import React, { useState } from "react";
import "./Desktop3.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import imageSrc from "../..//assets/dataHygiene2.png";

function Desktop3() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of data hygiene solution"
      ></HeadingBox>
      <div className="container">
        <div className="row row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>

        <div className="row row2">
          <div className="column column1">
            <div className="row column1_row1">
              <div className="label">
                <p className="text-wrapper">
                  Duplication Recodes, Missing Values, Inconsistent Formatting
                  if present in your files or images, can be identified here you
                  can also get real time data backup and voice activated control
                  facility.
                </p>
              </div>
            </div>
          </div>
          <div className="column"></div>
          <div className="row column2_row1">
            <div className="horizontal-line"></div>
          </div>
          <div className="column column3">
            <div className="row column1_row1">
              <div className="top_button">
                <GradientButton
                  startGradientColor="rgb(10, 111, 168)" // Start color
                  endGradientColor="rgb(5, 167, 244)"
                  width="950px"
                  height="60px"
                  link="#"
                  buttonText="Link with your own real time data backup storage"
                />
              </div>
              <img src={imageSrc} alt="Image" className="image" />
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                link="#"
                buttonText="Active voice control"
                icon={<FontAwesomeIcon icon={faMicrophone} />}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Desktop3;
