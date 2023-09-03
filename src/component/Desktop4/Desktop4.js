import React, { useState, useRef, useEffect } from "react";
import "./Desktop4.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import * as FileSaver from "file-saver"; // Import FileSaver
import { PDFDocument, rgb } from "pdf-lib";

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

      const pdfFile = new File([blob], fileName, { type: "application/pdf" });
      const fileURL = URL.createObjectURL(pdfFile);
      localStorage.setItem("savedFileURL", fileURL);
    } catch (err) {
      console.error("Error converting text to PDF:", err);
    }
  };



  const handleUpload = async () => {
    try {
      const formData = new FormData();

      // Append each selected file to the FormData object with the key 'files'
      selectedFiles.forEach((file, index) => {
        formData.append("files", file);
      });

      console.log(selectedFiles);


     await Client.post("/hygeine", formData)
        .then((res) => {
          console.log(res)
          const resData = res.data.hygeine_txt
          console.log(resData);


          const fileName = `dataHygiene.pdf`;

        handleTextToPDF(resData, fileName);
         window.alert("Click Next Button");
        })
        .catch((err) => {
          console.log(err);
        });

    
    } catch (error) {
      // Handle any errors that occur during the upload
      console.error("Error uploading files:", error);
    }
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
