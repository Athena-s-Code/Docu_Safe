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
      <div className="container_desk3">
        <div className="heading_container_desk3">
          <div className="heading_item_desk3">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>

        <div className="middle_container_desk3">
          <div className="item_container_desk3">
            <div className="label">
              <p className="text-wrapper">
                Duplication Recodes, Missing Values, Inconsistent Formatting if
                present in your files or images, can be identified here you can
                also get real time data backup and voice activated control
                facility.
              </p>
            </div>
          </div>

          <div className="middle_item_container_desk3">
            <div className="horizontal-line"></div>
          </div>
          <div className="item_container2_desk3">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              width="540px"
              height="48px"
              link="#"
              buttonText="Link with your own real time data backup storage"
            />

            <img
              src={imageSrc}
              alt="Image"
              className="image"
              style={{ marginTop: "30px" }}
            />

            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              width="350px"
              height="48px"
              buttonText="Active voice control "
              icon={<FontAwesomeIcon icon={faMicrophone} />}
            />

            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              width="340px"
              height="48px"
              link="/desktop3/desktop15"
              buttonText="Next"
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Desktop3;
