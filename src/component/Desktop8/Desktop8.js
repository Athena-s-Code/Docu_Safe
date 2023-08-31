import React, { useState } from "react";
import "./Desktop8.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
function Desktop8() {
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
      <div className="container8">
        <div className="heading_container8">
          <div className="heading_item8">
            <h3>
              <span className="underline">Data Decryption</span>
            </h3>
          </div>
        </div>
        <div className="top_container8">
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" 
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              width="360px"
              height="60px"
              buttonText=""
              icon={<FontAwesomeIcon icon={faPaperclip} />}
            />
            <p className="colTopic">Choose Encrypt File</p>
          </div>
        </div>
        <div className="middle_container8">
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Decrypt"
            />
          </div>
        </div>
        <div className="bottom_container8">
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="Cancel"
            />
          </div>
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" 
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              buttonText="View"
            />
          </div>
          <div className="item_container8 ">
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
export default Desktop8;
