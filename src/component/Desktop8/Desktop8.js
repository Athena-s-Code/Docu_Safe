import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop8.css";
import { PDFDocument, rgb } from "pdf-lib";
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
  const [isShowData, setIsShowData] = useState(false);
  const [selectedOption, setSelectedOption] = useState("PII Data");
  const [isPayment, setIsPayment] = useState(false);

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    debugger;
    console.log(selectedOption);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
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

  //upload handler
  const handleUpload = async () => {
    setIsLoading(true);
    if (selectedFile) {
      const obj = { file: selectedFile };

      if (isPayment === true) {
        console.log(selectedOption);
        await Client.post("/decrypt_payment", obj)
          .then((res) => {
            console.log(res.data);
            setResponseData(res.data);
            window.alert("Click View Button to See Response");
          })
          .catch((err) => {
            console.log(err);
            window.alert("Click View Button to See Response");
          });
      } else {
        await Client.post("/decrypt", obj)
          .then((res) => {
            console.log(res.data);
            setResponseData(res.data);
            window.alert("Click View Button to See Response");
          })
          .catch((err) => {
            console.log(err);
            window.alert("Click View Button to See Response");
          });
      }
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

  const backButtonHandler = () => {
    navigate("/desktop6");
  };

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
              buttonText="Choose Encrypt File"
              onClick={() => fileInputRef.current.click()}
              icon={<FontAwesomeIcon icon={faPaperclip} />}
            />
            {txtContent}
          </div>
          <div className="d8RadioButtons">
            <label className="d11RadioButtonsLabel">
              <input
                type="radio"
                value="PIT Data"
                checked={selectedOption === "PII Data"}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                  setIsPayment(false);
                }}
              />
              PII Data
            </label>
            <label className="d11RadioButtonsLabel">
              <input
                type="radio"
                value="Payment Details"
                checked={selectedOption === "Payment Details"}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                  setIsPayment(true);
                }}
              />
              Payment Details
            </label>
            <label className="d11RadioButtonsLabel">
              <input
                type="radio"
                value="Agreements"
                checked={selectedOption === "Agreements"}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                  setIsPayment(false);
                }}
              />
              Agreements
            </label>
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
export default Desktop8;
