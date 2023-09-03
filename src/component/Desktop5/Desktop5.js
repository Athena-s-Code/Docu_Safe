import React, { useState, useEffect } from "react";
import "./Desktop5.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Desktop5() {
  const [selectedOption, setSelectedOption] = useState("");
  const [password, setPassword] = useState("");
  const [showFileContainer, setShowFileContainer] = useState(false); // State for controlling visibility
  const [savedFileURL, setSavedFileURL] = useState(""); // State to store the saved file URL


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [savedFileData, setSavedFileData] = useState(null);

  useEffect(() => {
    // Retrieve the saved file URL from localStorage
    const fileURL = localStorage.getItem("savedFileURL");
    if (fileURL) {
      setSavedFileURL(fileURL);
    }
  }, []);

  // Function to handle viewing the file
  const handleViewFile = () => {
    console.log("Clicked View!");
    if (savedFileURL) {
      // Open the file URL in a new tab/window
      window.open(savedFileURL);
    }
  };

  // Function to handle downloading the file
  const handleDownloadFile = () => {
    console.log("Clicked Download!");
    if (savedFileURL) {
      const a = document.createElement("a");
      a.href = savedFileURL;
      a.download = "file.pdf"; // Set an appropriate file name
      document.body.appendChild(a);
      a.click();
    }
  };

  // Function to toggle the file container visibility
  const handleToggleFileContainer = () => {
    setShowFileContainer(!showFileContainer);
  };

  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of Data Hygiene Solution"
      ></HeadingBox>
      <div className="container5">
        <div className="heading_container5">
          <div className="heading_item5">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>
        <div className="top_container5">
          <div className="item_container5">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              width="40vw"
              buttonText="After verifying you can view the file "
            />
          </div>
          <div className="item_container5">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password" // Optional placeholder text
              className="password-input_desk5"
            />
          </div>
        </div>
        <div className="middle_container5">
          <div className="item_container_middle5">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="View"
              onClick={handleViewFile} // Call the function to toggle the file container
            />
          </div>
          <div className="item_container_middle5">
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
        <div className="bottom_container5">
          <div className="item_container_last5">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              buttonText="Edit"
              height="48px"
              icon={<FontAwesomeIcon icon={faPencilAlt} />}
            />
          </div>
        </div>
      </div>

      {/* Conditionally render the file container */}
      {showFileContainer && (
        <div className="container_file">
          <h1>Your Saved File:</h1>
          {savedFileData ? (
            <div>
              <p>Hygiene Solution : {savedFileData.fileName}</p>
            </div>
          ) : (
            <p>No saved file found.</p>
          )}
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}
export default Desktop5;
