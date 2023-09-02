import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "./Desktop8.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";

function Desktop8() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  // const [isShowResponse, setIsShowResponse] = useState(false);
  const fileInputRef = useRef(null);
  const [isShowData, setIsShowData] = useState(false);
//response
const [isError, setIsError] = useState();
const [error, setError] = useState();
const [responseData, setResponseData] = useState();



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const showResponseData = () => {
    setIsShowData((isShowData) => !isShowData);
    console.log("click");
  };



  //upload handler
  const handleUpload = async () => {
    setIsLoading(true);
    if (selectedFile) {
      const obj = { file: selectedFile };

      await Client.post("/decrypt", obj)
        .then((res) => {
          console.log(res.data);
          setResponseData(res.data)
          window.alert("Click View Button to See Response");
        })
        .catch((err) => {
          console.log(err);
          window.alert("Click View Button to See Response");
        });
    } else {
      console.log("No file selected.");
      window.alert("No file selected.");
    }
    setIsLoading(false);
  };
  //
  //
  let txtContent = (
    <input type="text" value={selectedFile ? selectedFile.name : ""} readOnly />
  );

  if (isLoading) {
    txtContent = <Loader />;
  }

const backButtonHandler = () =>{
navigate('/desktop6')
}


let responseView = <p>Nothing to show</p>;

  if (error) {
    responseView = (
      <>
        <h1>{error["message"]}</h1>
        <br />
        <h2>{error["status"]}</h2>
      </>
    );
  }
  if (responseData) {
    responseView = (
      <>
        <h1>{responseData["decrypted"]}</h1>
        <br />
        <h2>{responseData["status"]}</h2>
      </>
    );
  }




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
            {/* text file--------------------------------------------------------  */}
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef} // Create a ref to the file input
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              width="360px"
              height="60px"
              buttonText=""
              onClick={() => fileInputRef.current.click()}
              icon={<FontAwesomeIcon icon={faPaperclip} />}
            />
            <p className="colTopic">Choose Encrypt File</p>
            {txtContent}
          </div>
        </div>
        <div className="middle_container8">
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              onClick={handleUpload}
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
              onClick={backButtonHandler}
              buttonText="Back"
            />
          </div>
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              onClick={showResponseData}
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
          {isShowData && responseView}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop8;
