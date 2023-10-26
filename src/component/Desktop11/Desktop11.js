import React, { useState, useRef, useEffect } from "react";
import "./Desktop11.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { useNavigate } from "react-router-dom";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { PDFDocument, rgb } from "pdf-lib";
function Desktop10() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImgFile, setSelectedImgFile] = useState();
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  const [selectedOption, setSelectedOption] = useState("PII Data");
  const [savedHideFileURL, setSavedHideFileURl] = useState(null);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [error, setError] = useState();

  //
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const backHandler = () => {
    navigate("/desktop9");
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
      a.download = "Hide_file.pdf"; // Set an appropriate file name
      document.body.appendChild(a);
      a.click();
    }
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
      setSavedHideFileURl(fileURL);
      localStorage.setItem("savedHideFileURL", fileURL);
    } catch (err) {
      console.error("Error converting text to PDF:", err);
    }
  };

  const handleUpload = async () => {
    let obj;

    if (isPayment === true) {
      console.log("text file");
      setIsLoadingText(true);
      obj = { file: selectedFile };
      await Client.post("/hide_payment", obj)
        .then((res) => {
          console.log(res.data);
          const resData = res.data;
          const fileName = `dataHide.pdf`;
          handleTxtToPDF(resData, fileName);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
      window.alert("Click View Button to See Response");
      setIsLoadingImage(false);
      setIsLoadingText(false);
      fileInputRef.current.value = "";
    } else {
      if (selectedFile) {
        console.log("text file");
        setIsLoadingText(true);
        obj = { file: selectedFile };
        await Client.post("/hide", obj)
          .then((res) => {
            console.log(res.data);
            const resData = res.data;
            const fileName = `dataHide.pdf`;
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
        await Client.post("/hide", obj)
          .then((res) => {
            console.log(res.data);
            const resData = res.data;
            const fileName = `dataHide.pdf`;
            handleTxtToPDF(resData, fileName);
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          });
        window.alert("Click View Button to See Response");
        imageInputRef.current.value = "";
      } else {
        console.log("No file selected.");
      }
    }
    setIsLoadingImage(false);
    setIsLoadingText(false);
    fileInputRef.current.value = "";
    //imageInputRef.current.value = "";
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

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highliting and hiding"
      ></HeadingBox>
      <div className="container11">
        <div className="heading_container11">
          <div className="heading_item11">
            <h3>
              <span className="underline">Data Hiding</span>
            </h3>
          </div>
        </div>

        <div className="top_container11">
          <div className="item_container11">
            <p className="colTopic">Pdf File</p>
            {/* text file--------------------------------------------------------  */}
            <input
              type="file"
              accept=".pdf"
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
            {txtContent}
          </div>
          <div className="item_container_topmiddle11">
            <div className="d11RadioButtons">
              <label className="d11RadioButtonsLable">
                <input
                  type="radio"
                  value="PIT Data"
                  checked={selectedOption === "PIT Data"}
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                    setIsPayment(false);
                  }}
                />
                PII Data
              </label>
              <label className="d11RadioButtonsLable">
                <input
                  type="radio"
                  value="Payment Details"
                  checked={selectedOption === "Payment Details"}
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                    setIsPayment(true);
                  }}
                />
                Payement Details
              </label>
              <label className="d11RadioButtonsLable">
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
          {selectedOption !== "Payment Details" ? (
            <div className="item_container11">
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
              {imgContent}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="middle_container11">
          <div className="item_container_middle11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={handleUpload}
              height="48px"
              buttonText="Hide"
            />
          </div>
        </div>
        <div className="bottom_container11">
          <div className="item_container_last11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={backHandler}
              buttonText="Back"
            />
          </div>
          <div className="item_container_last11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={handleViewFile}
              buttonText="View"
            />
          </div>
          <div className="item_container_last11">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={handleDownloadFile}
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
