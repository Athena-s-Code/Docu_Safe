import React, { useState, useRef, useEffect } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import "./Desktop14.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import CurvedButton from "../UI/CurvedButton";

function Desktop14() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //response
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();
  //
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImgFile(file);
  };

  useEffect(() => {}, [selectedFile]);

  const showResponseData = async () => {
    if (responseData) {
      try {
        const pdfDoc = await PDFDocument.create();

        const page = pdfDoc.addPage([400, 400]);
        const { width, height } = page.getSize();

        const textContent = responseData;

        page.drawText(textContent, {
          x: 50,
          y: height - 50,
          size: 12,
          color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        const pdfUrl = URL.createObjectURL(blob);

        window.open(pdfUrl, "_blank");
      } catch (error) {
        console.error("Error creating and opening PDF:", error);
      }
    } else {
      console.error("No response data to open as PDF.");
    }
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

  const saveToFile = async () => {
    if (responseData) {
      try {
        const pdfDoc = await PDFDocument.create();

        const page = pdfDoc.addPage([400, 400]);
        const { width, height } = page.getSize();

        page.drawText(responseData, {
          x: 50,
          y: height - 50,
          size: 12,
          color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.pdf";
        a.click();

        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error creating and saving PDF:", error);
      }
    } else {
      console.error("No response data to save as PDF.");
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
      window.alert("No file selected");
    }
    setIsLoadingImage(false);
    setIsLoadingText(false);
    fileInputRef.current.value = "";
    imageInputRef.current.value = "";
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
        text="Data Classification"
        image="dataClassification.png"
        alt="image of data classification"
      ></HeadingBox>
      <div className="container14">
        <div className="heading_container14">
          <div className="heading_item14">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="top_container14">
          <div className="item_container14 ">
            <p className="colTopic">Pdf File</p>
          </div>
          <div className="item_container14">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container14">
            {/* text file--------------------------------------------------------  */}
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef} // Create a ref to the file input
            />
            <CurvedButton
              text="Browse"
              buttonClick={() => fileInputRef.current.click()}
              backgroundColor="rgb(10, 111, 168)"
              width="auto"
              height="48px"
            />
            {txtContent}
          </div>

          {/* image file---------------------------------------------------------------------------- */}
          <div className="item_container14">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleImgFileChange}
              ref={imageInputRef} // Create a ref to the file input
            />

            <CurvedButton
              text="Browse"
              buttonClick={() => imageInputRef.current.click()}
              backgroundColor="rgb(10, 111, 168)"
              width="auto"
              height="48px"
            />
            {imgContent}
          </div>
        </div>
        <div className="middle_container14">
          <div className="item_container_middle14">
            <CurvedButton
              text="Data Classification"
              buttonClick={handleUpload}
              backgroundColor="rgb(10, 111, 168)"
              width="300px"
              height="48px"
            />
          </div>
        </div>
        <div className="bottom_container14">
          <div className="item_container_last14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={showResponseData}
              buttonText="View Result"
            />
          </div>
          <div className="item_container_last14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={editButtonHandler}
              buttonText="Clear Files and Result"
              height="48px"
            />
          </div>
          <div className="item_container_last14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              buttonText="Share"
              height="48px"
            />
          </div>
          <div className="item_container_last14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={saveToFile}
              buttonText="Download"
            />
          </div>
          {isShowData && responseView}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop14;
