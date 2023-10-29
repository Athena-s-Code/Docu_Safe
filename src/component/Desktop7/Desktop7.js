import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop7.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import CurvedButton from "../UI/CurvedButton";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";

function Desktop7() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowData, setIsShowData] = useState(false);

  const [isPIData, setIsPIData] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isAgreement, setIsAgreement] = useState(false);

  const [selectedOption, setSelectedOption] = useState("PII Data");

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const [error, setError] = useState();
  const [responseData, setResponseData] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const showResponseData = () => {
    if (responseData) {
      const newWindow = window.open("", "_blank");
      newWindow.document.open();
      newWindow.document.write(`<pre>${responseData}</pre>`);
      newWindow.document.close();
    } else {
      console.error("No response data to show.");
    }
  };

  const saveToFile = () => {
    if (responseData) {
      const blob = new Blob([responseData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.txt";
      a.click();
      URL.revokeObjectURL(url);
    } else {
      console.error("No response data to save.");
    }
  };

  //upload handler
  const handleUpload = async () => {
    setIsLoading(true);
    if (selectedFile) {
      const obj = { file: selectedFile };

      if (isPayment === true) {
        await Client.post("/encrypt_payment", obj)
          .then((res) => {
            console.log(res.data);
            const data = res.data;
            setResponseData(JSON.stringify(data));

            window.alert("Click View Button to See Response");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
            window.alert("Click View Button to See Response");
          });
      } else if (isPIData) {
        await Client.post("/encrypt", obj)
          .then((res) => {
            console.log(res.data);
            const data = res.data;
            setResponseData(JSON.stringify(data));

            window.alert("Click View Button to See Response");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
            window.alert("Click View Button to See Response");
          });
      } else if (isAgreement) {
        await Client.post("/encrypt_wholefile", obj)
          .then((res) => {
            console.log(res.data);
            const data = res.data;
            setResponseData(JSON.stringify(data));

            window.alert("Click View Button to See Response");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
            window.alert("Click View Button to See Response");
          });
      }
    } else {
      console.log("No file selected.");
      window.alert("No file selected.");
    }
    setIsPIData(false);
    setIsAgreement(false);
    setIsPayment(false);
    setIsLoading(false);
  };
  //
  let txtContent = (
    <input type="text" value={selectedFile ? selectedFile.name : ""} readOnly />
  );

  if (isLoading) {
    txtContent = <Loader />;
  }

  const backHandler = () => {
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
        <h1>{responseData}</h1>
        <br />
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
      <div className="container7">
        <div className="heading_container7">
          <div className="heading_item7">
            <h3>
              <span className="underline">Data Encryption</span>
            </h3>
          </div>
        </div>
        <div className="top_container7">
          <div>
            <div className="item_container7 ">
              <p className="colTopic">Pdf File</p>
            </div>
            <div className="item_container7 ">
              {/* <p className="colTopic">Image File</p> */}
            </div>
            <div className="item_container7">
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
              <p>{txtContent}</p>
            </div>

            {/* image file---------------------------------------------------------------------------- */}
            <div className="item_container7"></div>
          </div>
          <div className="d8RadioButtons">
            <label className="d11RadioButtonsLabel">
              <input
                type="radio"
                value="PII Data"
                checked={selectedOption === "PII Data"}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                  setIsPIData(true);
                  //setIsPayment(false);
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
                  setIsAgreement(true);
                  //setIsPayment(false);
                }}
              />
              Agreements
            </label>
          </div>
        </div>
        <div className="middle_container7">
          <div className="item_container_middle7">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              width="1140px"
              onClick={handleUpload}
              buttonText="Encrypt"
              onC
            />
          </div>
        </div>
        <div className="bottom_container7">
          <div className="item_container_last7">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              onClick={backHandler}
              buttonText="Back"
            />
          </div>
          <div className="item_container_last7 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
              onClick={showResponseData}
              buttonText="View"
            />
          </div>
          <div className="item_container_last7 ">
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
export default Desktop7;
