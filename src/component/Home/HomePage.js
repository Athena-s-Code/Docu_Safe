import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.css"; // Import  CSS file for styling
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import img1 from "../../assets/home-img_1.png";
import img2 from "../../assets/home-img_2.png";
import img3 from "../../assets/home-img_3.png";
import Card from "../UI/Card";

function HomePage() {
  const navigate = useNavigate();

  function navigateButtonOne() {
    navigate("/desktop3");
  }

  function navigateButtonTwo() {
    navigate("/test-page");
  }

  function navigateButtonThree() {
    navigate("/test-page");
  }

  function navigateButtonFour() {
    navigate("/desktop3");
  }

  return (
    <>
      <Header />
      <Card/>
      <div className="home-page">
        <div className="image-container-home">
          <img src={img1} alt="computer" />
          <button className="image-button-home" onClick={navigateButtonOne}>Data Classification</button>
        </div>
        <div className="image-container-home">
          <img src={img2} alt="computer" />
          <button className="image-button-home" onClick={navigateButtonTwo}>Data Encryption</button>
        </div>
        <div className="image-container-home">
          <img src={img3} alt="computer" />
          <button className="image-button-home" onClick={navigateButtonThree}>Data Highlight & Hidden</button>
        </div>
        <div className="image-container-home">
          <img src={img3} alt="computer" />
          <button className="image-button-home" onClick={navigateButtonFour}>Data Hygiene solutions</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
