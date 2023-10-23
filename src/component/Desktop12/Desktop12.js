import React, { useState } from "react";
import "./Desktop12.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import imageSrc from "../..//assets/dataClassification2.png";

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
      <div className="container_desk12">
        <div className="heading_container_desk12">
          <div className="heading_item_desk12">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="middle_container_desk12">
          <div className="item_container_desk12">
            <div className="label">
              <p className="text-wrapper">
                Data Classification is a crucial task in the field of data
                science and it’s importance has increased significantly with the
                rise of digital data. In here we classify data from text
                document format and image format.
              </p>
            </div>
          </div>

          <div className="middle_item_container_desk12">
            <div className="horizontal-line"></div>
          </div>

          <div className="item_container2_desk3">
            <img
              src={imageSrc}
              alt="computer"
              className="image"
              style={{ marginBottom: "40px" }}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop12/desktop16"
              buttonText="Next"
              height="48px"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Desktop12;
