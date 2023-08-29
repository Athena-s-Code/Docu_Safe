import React, { useState } from "react";
import "./Temp.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import imageSrc from "../..//assets/mobile_encryption.png";

function Desktop6() {
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
        <div className="middle_container">
          <div className="item_container">
            <div className="label">
              <p className="text-wrapper">
                Offers a state-of-the-art hybrid cryptography system, utilizing
                three advanced algorithms to ensure the utmost security and
                seamlessness in protecting your sensitive data.
                <br></br> <br></br>
                You can easily safeguard your information without compromising
                on ease of use. Trust us to keep your data safe and secure with
                our cutting-edge solution.
              </p>
            </div>
          </div>
          <div className="middle_item_container">
            <div className="horizontal-line"></div>
          </div>
          <div className="item_container">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              width="240px"
              height="48px"
              buttonText="Encryption"
            />

            <img src={imageSrc} alt="Image" className="image" />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              width="240px"
              height="48px"
              buttonText="Decryption"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Desktop6;
