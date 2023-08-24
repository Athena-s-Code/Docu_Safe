import React from "react";
import { useNavigate } from "react-router-dom";

import "./Desktop9.css"; // Import  CSS file for styling
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import imag2 from "../../assets/undraw_resume_folder_re_e0bi 1.png";
import Card from "../UI/Card";

function Desktop9() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Card
        img={imag2}
        heading="Data Highlighting & Handling"
        text="is a powerful free, open source tool for working with messy data"
      />
      <div className="desktop-container ">
        <div className="desktop-headding">
          <h1>Data Highlighting & Handling</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Desktop9;
