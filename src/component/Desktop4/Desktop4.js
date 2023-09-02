import React, { useState, useRef, useEffect } from "react";
import "./Desktop4.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import * as FileSaver from "file-saver"; // Import FileSaver

function Desktop4() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Response
  const [isError, setIsError] = useState();
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleImgFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };
  //handle downlod file

  const handleDownloadFile = (data, fileName) => {
    const blob = new Blob([data]);
    FileSaver.saveAs(blob, fileName);
  };
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      console.log("No files selected.");
      return;
    }

    setIsLoadingText(true);
    setIsLoadingImage(true);

    const promises = selectedFiles.map(async (file) => {
      try {
        const obj = { file };
        console.log(obj);
        const res = await Client.post("/classification", obj);

        // Assuming the response contains a 'fileData' field with the file content
        const fileData = res.data.fileData;
        const fileName = "dataHygiene.pdf"; // Set your desired file name and extension

        handleDownloadFile(fileData, fileName);
        localStorage.setItem(
          "savedFileData",
          JSON.stringify({ fileName, fileData })
        );
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    });

    try {
      await Promise.all(promises);
      window.alert("Click View Button to See Response");
    } catch (err) {
      console.error("Error uploading files:", err);
    }

    setIsLoadingText(false);
    setIsLoadingImage(false);
    fileInputRef.current.value = "";
    imageInputRef.current.value = "";
    setSelectedFiles([]);
  };

  let filesContent = (
    <input
      type="file"
      multiple
      onChange={handleFileChange}
      ref={fileInputRef}
      style={{ display: "none" }}
    />
  );

  let imagesContent = (
    <input
      type="file"
      multiple
      onChange={handleImgFileChange}
      ref={imageInputRef}
      style={{ display: "none" }}
    />
  );

  if (isLoadingText) {
    filesContent = <Loader />;
  }

  if (isLoadingImage) {
    imagesContent = <Loader />;
  }

  let responseView = <p>Nothing to show</p>;

  // if (error) {
  //   responseView = (
  //     <>
  //       <h1>{error.message}</h1>
  //     </>
  //   );
  // }

  // if (responseData) {
  //   responseView = (
  //     <>
  //       <h1>{responseData.classification}</h1>
  //       <br />
  //       <h2>{responseData.status}</h2>
  //     </>
  //   );
  // }

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of Data Hygiene Solution"
      ></HeadingBox>
      <div className="container4">
        <div className="heading_container4">
          <div className="heading_item4">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>

        <div className="top_container4">
          <div className="item_container4 ">
            <p className="colTopic">Text Files</p>
          </div>
          <div className="item_container4 ">
            <p className="colTopic">Image Files</p>
          </div>
          <div className="item_container4 ">
            {/* Text files -------------------------------------------------------- */}
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => fileInputRef.current.click()}
              height="60px"
              buttonText="Browse"
            />
            {filesContent}
          </div>
          <div className="item_container4">
            {/* Image files -------------------------------------------------------- */}
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => imageInputRef.current.click()}
              height="60px"
              buttonText="Browse"
            />
            {imagesContent}
          </div>
        </div>
        <div className="middle_container4">
          <div className="item_container_middle4">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={handleUpload}
              height="48px"
              width="1140px"
              buttonText="Malware Detection"
            />
          </div>
        </div>
        <div className="bottom_container4">
          <div className="item_container_last4">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="/desktop3/desktop4/desktop5"
              buttonText="Next >>"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Desktop4;
