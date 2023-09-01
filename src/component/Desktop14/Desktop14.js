import React, { useState, useRef } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
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

  // const imageUpload = async () => {
  //   if (selectedImgFile) {
  //     const obj = { file: selectedImgFile };

  //     await Client.post("/upload", obj)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     console.log("No image file selected.");
  //   }
  // };
  //need to handle both file submit in this function
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

  if (isLoading) {
    txtContent = <Loader />;
  }

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

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
            <p className="colTopic">Text File</p>
          </div>
          <div className="item_container14">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container14">
            {/* text file--------------------------------------------------------  */}
            <input
              type="file"
              accept=".txt"
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
              accept=".jpg"
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
              buttonText="View"
              height="48px"
            />
          </div>
          <div className="item_container_last14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              buttonText="Edit"
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
              buttonText="Download"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop14;
