import React, { useState, useRef, useEffect } from "react";
import "./Desktop4.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { PDFDocument, rgb } from "pdf-lib";

function Desktop4() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);


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

 const handleTxtToPDF = async (txtData, fileName) => {
   try {
     const lines = txtData.split("\n"); // Split the text into lines

     const pdfDoc = await PDFDocument.create();
     let currentPage = pdfDoc.addPage([600, 400]);
     let y = 350; // Initial y position for text

     // Function to add text to the current page and create a new page if necessary
     const addTextToPage = async (text) => {
       // Check if the text exceeds the current page height
       if (y - 20 < 0) {
         currentPage = pdfDoc.addPage([600, 400]);
         y = 350; // Reset y position for the new page
       }

       currentPage.drawText(text, {
         x: 50,
         y,
         size: 20,
         color: rgb(0, 0, 0),
       });

       y -= 20; // Move y position up for the next line of text
     };

     // Iterate through lines and add them to the PDF
     for (const line of lines) {
       await addTextToPage(line);
     }

     // Save the PDF
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
      .then(async (res) => {
        console.log(res);
        const resData = res.data.hygeine_txt;
        console.log(resData);

        const fileName = `dataHygiene.pdf`;

        // Call the new function to convert the .txt data to PDF
        await handleTxtToPDF(resData, fileName);

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
