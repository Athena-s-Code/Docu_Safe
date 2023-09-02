import React, { useState, useRef } from "react";
import "./Desktop8.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";

function Desktop8() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  // const [isShowResponse, setIsShowResponse] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  //upload handler
  const handleUpload = async () => {
    setIsLoading(true);
    if (selectedFile) {
      const obj = { file: selectedFile };

      await Client.post("/upload", obj)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("No file selected.");
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
              accept=".txt"
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
              buttonText=""
              onClick={() => fileInputRef.current.click()}
              icon={<FontAwesomeIcon icon={faPaperclip} />}
            />
            <p className="colTopic">Choose Encrypt File</p>
            {txtContent}
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
              buttonText="Cancel"
            />
          </div>
          <div className="item_container8 ">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              height="60px"
              width="160px"
              link="#"
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
              buttonText="Share"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop8;
