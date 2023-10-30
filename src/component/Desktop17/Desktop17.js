import React, { useState, useRef } from "react";

import "./Desktop17.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { BACKEND_URL } from '../http/Constant';

function Desktop17() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isLoadingText, setIsLoadingText] = useState(false);

  //response
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState("");

  const fileInputRef = useRef(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile([...selectedFile, ...files]);
  };

 

  const submitHandler = async () => {
    let obj;
    if (selectedFile.length > 0) {
      const formData = new FormData();
      selectedFile.forEach((file, index) => {
        formData.append("files", file);
      });

      console.log(selectedFile);
      setIsLoadingText(true);
      obj = { files: selectedFile };
      await Client.post("/job_title_predict", formData)
        .then((res) => {
          setResponseData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          window.alert(err.message);
        });
      window.alert("Click download button");
    } else {
      console.log("No file selected.");
      window.alert("No file selected");
    }
    setIsLoadingText(false);
    fileInputRef.current.value = "";
  };

  const downloadHandler = () => {
    if (responseData) {
      try {
       window.open(BACKEND_URL + responseData, "_blank");
      } catch (error) {
        window.alert("Error saving response data to excel file:", error);
      }
    } else {
      window.alert("No response data to save as a excel file.");
    }
  };

  let txtContent = (
    <input
      type="text"
      value={selectedFile.length > 0 ? selectedFile.map(file => file.name).join(", ") : ""}
      readOnly
    />
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
              multiple
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
              {/* <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={showResponseData}
                buttonText="View"
              /> */}
            </div>
            <div className="button_container_17">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={downloadHandler}
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