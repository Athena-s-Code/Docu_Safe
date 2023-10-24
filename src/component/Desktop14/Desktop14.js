import React, { useState, useRef, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import "./Desktop14.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";

function Desktop14() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isShowData, setIsShowData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedHideFileURL, setSavedHideFileURl] = useState(null);
  // response
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

  // Function to handle viewing the file
  const handleViewFile = () => {
    console.log("Clicked View!");
    if (savedHideFileURL) {
      // Open the file URL in a new tab/window
      window.open(savedHideFileURL);
    }
  };

  // Function to handle downloading the file
  const handleDownloadFile = () => {
    console.log("Clicked Download!");
    if (savedHideFileURL) {
      const a = document.createElement("a");
      a.href = savedHideFileURL;
      a.download = "Classification_file.pdf"; // Set an appropriate file name
      document.body.appendChild(a);
      a.click();
    }
  };


  const handleTxtToPDF = async (txtData, fileName) => {
    try {
      const pdfDoc = await PDFDocument.create();
      let currentPage = pdfDoc.addPage([600, 400]);
      let y = 350; // Initial y position for text

      const addTextToPage = async (text) => {
        if (y - 20 < 0) {
          currentPage = pdfDoc.addPage([600, 400]);
          y = 350; // Reset y position for the new page
        }

        const encodedText = encodeTextToBase64(text);

        currentPage.drawText(encodedText, {
          x: 50,
          y,
          size: 20,
          color: rgb(0, 0, 0),
          font: await pdfDoc.embedFont(StandardFonts.Helvetica),
        });

        y -= 20; // Move y position up for the next line of text
      };

      const lines = txtData.split("\n"); // Split the text into lines

      for (const line of lines) {
        await addTextToPage(line);
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });

      const pdfFile = new File([blob], fileName, { type: "application/pdf" });
      const fileURL = URL.createObjectURL(pdfFile);
      setSavedHideFileURl(fileURL);
      localStorage.setItem("savedHideFileURL", fileURL);
    } catch (err) {
      console.error("Error converting text to PDF:", err);
    }
  };

  const encodeTextToBase64 = (text) => {
    // Convert text to Uint8Array
    const encoder = new TextEncoder();
    const textUint8Array = encoder.encode(text);

    // Encode Uint8Array to Base64
    const encodedText = btoa(String.fromCharCode(...textUint8Array));
    return encodedText;
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
          const resData = res.data;
          const fileName = `dataClassification.pdf`;
          handleTxtToPDF(resData, fileName);
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
          const resData = res.data;
          const fileName = `dataClassification.pdf`;
          handleTxtToPDF(resData, fileName);
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
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              onClick={() => fileInputRef.current.click()}
              height="48px"
              buttonText="Browse"
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

            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => imageInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
            {imgContent}
          </div>
        </div>
        <div className="middle_container14">
          <div className="item_container_middle14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={handleUpload}
              height="48px"
              width="300px"
              buttonText="Data Classification"
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
              onClick={handleViewFile}
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
              onClick={handleDownloadFile}
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
