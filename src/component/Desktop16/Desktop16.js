import React, { useState } from "react";
import "./Desktop16.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop16() {
  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Classification"
        image="dataClassification.png"
        alt="image of data classification"
      ></HeadingBox>
      <div className="container16">
        <div className="heading_container16">
          <div className="heading_item16">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="top_container16">
          <div className="item_container16">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop12/desktop16/desktop14"
              height="48px"
              buttonText="Data Classification"
            />
          </div>
          <div className="item_container16">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop12/desktop16/desktop17"
              height="48px"
              buttonText="Job title prediction"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop16;
