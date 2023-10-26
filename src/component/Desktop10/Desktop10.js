import React, { useState, useRef, useEffect } from "react";
import "./Desktop10.css";
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
  const [isShowData, setIsShowData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("PII Data");
  const [savedHideFileURL, setSavedHideFileURl] = useState(null);
  const [error, setError] = useState();
  const [isPayment, setIsPayment] = useState(false);

  const [pdfData, setPdfData] = useState(null);
  var pdfFile

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
    //setIsShowData((isShowData) => !isShowData);
    if (pdfData) { 
      
      const blob = new Blob([pdfData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
  
      // Open the PDF in a new browser tab or window
      window.open(url, '_blank');
  
      // Release the URL object to free up resources (optional)
      URL.revokeObjectURL(url);
    }
  };

  // const handleDownload = () => {
  //   // Download the PDF file
  //   console.log(pdfFile)
  //   if (pdfFile) { // Assuming you have the PDF data stored in the 'pdfData' variable
  //      const blob = new Blob([pdfFile], { type: 'application/pdf' });
  //     const url = URL.createObjectURL(blob);
  
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "response.pdf";
  //     a.click();
  
  //     // Release the URL object to free up resources
  //     URL.revokeObjectURL(url);
  //   }

  // };

  const handleDownload = () => {
    if (pdfData) {
      const blob = new Blob([pdfData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "response.pdf";
      a.click();
  
      // Release the URL object to free up resources
      URL.revokeObjectURL(url);
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
      await Client.post("/highlight_payment", obj)
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
        setIsLoadingText(true);
        obj = { file: selectedFile };
        await Client.post("/highlight", obj, {
          responseType: "arraybuffer", // Important for binary data like PDFs
        })
          .then((res) => {
            //console.log(res.data);
            //setPdfURL(res.data);
            //pdfFile = new Blob([res.data], { type: 'application/pdf' });
            setPdfData(res.data);

            console.log(pdfData); // Set the PDF URL received from the server
          })
          .catch((err) => {
            console.log(err);
          });
        window.alert("Click View Button to See Response");
      } else if (selectedImgFile) {
        setIsLoadingImage(true);
        obj = { file: selectedImgFile };
        await Client.post("/highlight", obj)
          .then((res) => {
            console.log(res.data);
            //setPdfURL(res.data.pdfURL); // Set the PDF URL received from the server
          })
          .catch((err) => {
            console.log(err);
          });
        window.alert("Click View Button to See Response");
      } else {
        console.log("No file selected.");
      }
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

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Highlighting & Hiding"
        image="dataHighliting.png"
        alt="image of data highlighting and hiding"
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
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={() => fileInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
            {txtContent}
          </div>
          <div className="item_container_topmiddle10">
            <div className="d11RadioButtons">
              <label className="d11RadioButtonsLabel">
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

          {selectedOption !== "Payment Details" ? (
            <div className="item_container10">
              <p className="colTopic">Image File</p>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                style={{ display: "none" }}
                onChange={handleImgFileChange}
                ref={imageInputRef}
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
          ) : (
            ""
          )}
        </div>

        <div className="middle_container10">
          <div className="item_container_middle10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
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
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              onClick={backHandler}
              buttonText="Back"
            />
          </div>
          <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="View"
              onClick={showResponseData}
            />
          </div>
          <div className="item_container_last10">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Download"
              onClick={handleDownload}
            />
          </div>
          {isShowData && responseView}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Desktop10;
