import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.css"; // Import  CSS file for styling
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import computerImg from "../../assets/img.png";
import imag2 from "../../assets/png.png";
import Card from "../UI/Card";

function HomePage() {
  const navigate = useNavigate();

  function navigateButtonOne() {
    navigate("/test-page");
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
      <Card
        img={imag2}
        heading="Docu Safe"
        text="is a powerful free, open source tool for working with messy data"
      />
      <div className="home-page">
        <div className="image-container">
          <img src={computerImg} alt="computer" />
          <button className="image-button" onClick={navigateButtonOne}>Data Classification</button>
        </div>
        <div className="image-container">
          <img src={computerImg} alt="computer" />
          <button className="image-button" onClick={navigateButtonTwo}>Data Encryption</button>
        </div>
        <div className="image-container">
          <img src={computerImg} alt="computer" />
          <button className="image-button" onClick={navigateButtonThree}>Data Highlight & Hidden</button>
        </div>
        <div className="image-container">
          <img src={computerImg} alt="computer" />
          <button className="image-button" onClick={navigateButtonFour}>Data Hygiene solutions</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
