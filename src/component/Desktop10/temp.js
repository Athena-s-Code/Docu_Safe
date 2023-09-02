import React, { useState, useRef, useEffect } from "react";
import "./Desktop10.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { useNavigate } from "react-router-dom";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import CurvedButton from "../UI/CurvedButton";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

function Desktop10() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //response
  const [isError, setIsError] = useState();
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();
  //
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const backHandler = () => {
    navigate("/desktop9");
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImgFile(file);
  };

  useEffect(() => {}, [selectedFile]);

  const showResponseData = () => {
    setIsShowData((isShowData) => !isShowData);
    console.log("click");
  };

  const editButtonHandler = () => {
    if (window.confirm("Are you sure to remove uploaded file")) {
      fileInputRef.current.value = "";
      imageInputRef.current.value = "";
      setSelectedFile(null);
      setSelectedImgFile(null);
      setResponseData();
    }
  };

  const handleUpload = async () => {
    let obj;

    if (selectedFile) {
      console.log("text file");
      setIsLoadingText(true);
      obj = { file: selectedFile };
      await Client.post("/classification", obj)
        .then((res) => {
          console.log(res.data);
          setResponseData(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
      window.alert("Click View Button to See Response");
    } else if (selectedImgFile) {
      setIsLoadingImage(true);
      obj = { file: selectedImgFile };
      await Client.post("/classification", obj)
        .then((res) => {
          console.log(res.data);
          setResponseData(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
      window.alert("Click View Button to See Response");
    } else {
      console.log("No file selected.");
    }
    setIsLoadingImage(false);
    setIsLoadingText(false);
    fileInputRef.current.value = "";
    imageInputRef.current.value = "";
    //setSelectedFile()
  };

  let txtContent = (
    <input type="text" value={selectedFile ? selectedFile.name : ""} readOnly />
  );

  let imgContent = (
    <input
      type="text"
      value={selectedImgFile ? selectedImgFile.name : ""}
      readOnly
    />
  );

  if (isLoadingText) {
    txtContent = <Loader />;
  }

  if (isLoadingImage) {
    imgContent = <Loader />;
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
        <h1>{responseData["classification"]}</h1>
        <br />
        <h2>{responseData["status"]}</h2>
      </>
    );
  }
  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container10">
        <div className="heading_container10">
          <div className="heading_item10">
            <h3>
              <span className="underline">Data Highlighting</span>
            </h3>
          </div>
        </div>

        <div className="top_container10">
          <div className="item_container10">
            <p className="colTopic">Text File</p>
            {/* text file--------------------------------------------------------  */}
            <input
              type="file"
              accept=".txt"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef} // Create a ref to the file input
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => fileInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
          </div>
          <div className="item_container_topmiddle10">
            <div className="d11RadioButtons">
              <label className="d11RadioButtonsLable">
                <input
                  type="radio"
                  value="PIT Data"
                  checked={selectedOption === "PIT Data"}
                  onChange={handleOptionChange}
                />
                PIT Data
              </label>
              <label className="d11RadioButtonsLable">
                <input
                  type="radio"
                  value="Payment Details"
                  checked={selectedOption === "Payment Details"}
                  onChange={handleOptionChange}
                />
                Payement Details
              </label>
              <label className="d11RadioButtonsLable">
                <input
                  type="radio"
                  value="Agreements"
                  checked={selectedOption === "Agreements"}
                  onChange={handleOptionChange}
                />
                Agreements
              </label>
            </div>
          </div>
          <div className="item_container10">
            <p className="colTopic">Image File</p>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleImgFileChange}
              ref={imageInputRef} // Create a ref to the file input
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => imageInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
          </div>
        </div>

        <div className="middle_container10">
          <div className="item_container_middle10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={handleUpload}
              height="48px"
              buttonText="Highlight"
            />
          </div>
        </div>
        <div className="bottom_container10">
          <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={backHandler}
              buttonText="Back"
            />
          </div>
          <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="View"
            />
          </div>
          <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Download"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop10;