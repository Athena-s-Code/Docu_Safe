import React, { useState } from "react";
import "./Desktop9.css";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import Footer from "../Footer/Footer";
import GradientButton from "../UI/GradientButton";

function Desktop9() {
  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
             <div className="container9">
        <div className="heading_container9">
          <div className="heading_item9">
            <h3>
              <span className="underline">Data Highlighting & Hiding</span>
            </h3>
          </div>
        </div>

        <div className="top_container9">
          <div className="item_container9">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Data Highlighting"
            />
          </div>
          <div className="item_container9">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Data Hiding"
            />
          </div>
        </div>
        <div className="middle_container9">
          <div className="item_container_middle9">
            <GradientButton
              startGradientColor="rgb(146.62, 0, 0)" // Start color
              endGradientColor="rgb(255, 86.14, 63.11)"
              link="#"
              height="48px"
              width="1140px"
              buttonText="Malware Detection"
            />
          </div>
        </div>
        <div className="bottom_container9">
          <div className="item_container_last9">
            <GradientButton
              startGradientColor="rgb(13.16, 168, 10)" // Start color
              endGradientColor="rgb(0, 196.56, 7.86)"
              height="48px"
              width="160px"
              link="#"
              buttonText="Next >"
            />
          </div>
          
        </div>         
      </div>
      <Footer />
    </div>
  );
}

export default Desktop9;
