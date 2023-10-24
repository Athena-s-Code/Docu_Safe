import React, { useState, useRef, useEffect } from "react";

import "./Desktop17.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";

function Desktop17() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoadingText, setIsLoadingText] = useState(false);

  //response
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const submitHandler = async () => {
    let obj;

    if (selectedFile) {
      console.log("text file");
      setIsLoadingText(true);
      obj = { file: selectedFile };
      await Client.post("/predictor", obj)
        .then((res) => {
          console.log(res.data);
          const excelData = res.data;
          setResponseData(excelData);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          window.alert(err.message);
        });
      window.alert("Click View Button to See Response");
    } else {
      console.log("No file selected.");
      window.alert("No file selected");
    }
   setIsLoadingText(false);
    fileInputRef.current.value = "";
    
  };

  const showResponseData = () => {
    if (responseData) {
      const blob = new Blob([responseData], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "job_titles"; // Set the desired file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  };

  let txtContent = (
    <input type="text" value={selectedFile ? selectedFile.name : ""} readOnly />
  );
  if (isLoadingText) {
    txtContent = <Loader />;
  }

  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Classification"
        image="dataClassification.png"
        alt="image of data classification"
      ></HeadingBox>
      <div className="container17">
        <div className="heading_container17">
          <div className="heading_item17">
            <h3>
              <span className="underline">Job title prediction</span>
            </h3>
          </div>
        </div>
        <div className="top_container17">
          <div className="item_container17 ">
            <p className="colTopic">Pdf File</p>
          </div>
          <div className="item_container17">
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              onClick={() => fileInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
            {txtContent}
          </div>
        </div>
        <div className="middle_container17">
          <div className="item_container_middle17">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={submitHandler}
              height="48px"
              width="300px"
              buttonText="Job title prediction"
            />
          </div>
        </div>
        <div className="bottom_container17">
          <div className="item_container_last17">
            <div className="button_container_17">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={showResponseData}
                buttonText="View"
              />
            </div>
            <div className="button_container_17">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={showResponseData}
                buttonText="Download"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop17;
