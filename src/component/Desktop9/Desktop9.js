import React, { useState } from "react";
import "./Desktop9.css";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import Footer from "../Footer/Footer";
import CurvedButton from "../UI/CurvedButton";
import { useNavigate } from "react-router-dom";

function Desktop9() {
const navigate = useNavigate()

const dataHighlightClickHanlder = () =>{
  navigate("/desktop9/desktop10")
}

const dataHidingClickHanlder = () =>{
  navigate("/desktop9/desktop11")
}

  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container">
        <div className="row d9row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Highlighting & Hiding</span>
            </h3>
          </div>
        </div>
        <div className="row d9row2">
          <div className="column d9row2col1">
            <CurvedButton
              text="Data Highlighting"
              backgroundColor="#0099ff"
              width="500px"
              height="80px"
              buttonClick={dataHighlightClickHanlder}
            ></CurvedButton>
          </div>
          <div className="column d9row2col2">
            <CurvedButton
              text="Data Hiding"
              backgroundColor="#0099ff"
              width="500px"
              height="80px"
              buttonClick={dataHidingClickHanlder}
            ></CurvedButton>
          </div>
        </div>
        <div className="row d9row3">
          <CurvedButton
            text="Malware Detection"
            backgroundColor="#ff0000"
            width="1216px"
            height="60px"
          ></CurvedButton>
        </div>
        <div className="row d9row4">
          <CurvedButton
            text="Next >"
            backgroundColor="#008000"
            width="264px"
            height="60px"
          ></CurvedButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop9;
