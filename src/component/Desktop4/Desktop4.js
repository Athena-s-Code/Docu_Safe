import React, { useState, useRef, useEffect } from "react";
import "./Desktop4.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { PDFDocument, rgb } from "pdf-lib"; // Import PDF-lib

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
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      files,
    ]);
  };
  const handleImgFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      files,
    ]);
  };
  useEffect(() => {}, [selectedFiles]);

  const handleTextToPDF = async (textData, fileName) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 400]);
      page.drawText(textData, {
        x: 50,
        y: 350,
        size: 20,
        color: rgb(0, 0, 0),
      });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      // Save the PDF to local storage
      const pdfFile = new File([blob], fileName, { type: "application/pdf" });
      const fileURL = URL.createObjectURL(pdfFile);
      localStorage.setItem("savedFileURL", fileURL);
    } catch (err) {
      console.error("Error converting text to PDF:", err);
    }
  };



  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      console.log("No files selected.");
      return;
    }

    setIsLoadingText(true);
    setIsLoadingImage(true);

    try {
      const obj = { files: selectedFiles };
      console.log(obj);
      const res = await Client.post("/hygeine", { obj });
      console.log(res.data);

      // Assuming res.data is an array of response objects
      const responseArray = res.data.map((response, index) => {
        const textData = response.textData;
        const fileName = `dataHygiene_${index}.pdf`;

        // Convert text data to PDF and save to local storage
        handleTextToPDF(textData, fileName);

        return { textData, fileName };
      });

      // Save response data to state
      setResponseData(responseArray);

      window.alert("Click View Button to See Response");
    } catch (err) {
      console.error("Error uploading files:", err);
      setError(err.message);
    }

    setIsLoadingText(false);
    setIsLoadingImage(false);
    fileInputRef.current.value = "";
    imageInputRef.current.value = "";
    setSelectedFiles([]);
  };

  let fileContent = selectedFiles.map((file, index) => (
    <div key={index}>
      <p>{file.name}</p>
    </div>
  ));

  if (isLoadingText || isLoadingImage) {
    fileContent = <Loader />;
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
            {/* text file --------------------------------------------------------  */}
            <input
              type="file"
              accept=".txt, .pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={fileInputRef}
              multiple // Enable multiple file selection
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => fileInputRef.current.click()}
              height="60px"
              buttonText="Browse"
            />
            {fileContent}
          </div>
          <div className="item_container4">
            {/* Image files -------------------------------------------------------- */}
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
              onChange={handleImgFileChange}
              ref={imageInputRef}
              multiple // Enable multiple file selection
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => imageInputRef.current.click()}
              height="60px"
              buttonText="Browse"
            />
            {fileContent}
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
