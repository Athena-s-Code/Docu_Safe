import React, { useState, useRef } from "react";
import "./Desktop18.css";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import Footer from "../Footer/Footer";
import GradientButton from "../UI/GradientButton";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { BACKEND_URL } from "../http/Constant";
import { useNavigate } from "react-router-dom";
function Desktop18() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoadingText, setIsLoadingText] = useState(false);
  const [isValidate, setValidate] = useState(true);
  const navigate = useNavigate();
  //response
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const NavigateToNext = () => {
    if (isValidate == true) {
      navigate("/desktop3/desktop15/desktop18/desktop19", { responseData });
    } else {
      window.alert("Please wait for Validation Complete !");
    }
  };
  const submitHandler = async () => {
    let obj;

    if (selectedFile) {
      console.log(selectedFile);
      setIsLoadingText(true);
      obj = { file: selectedFile };
      await Client.post("/validate", obj)
        .then((res) => {
          setResponseData(res.data);
          setValidate(true);
          localStorage.setItem("Path",res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          window.alert(err.message);
        });
      window.alert("Click download button");
    } else {
      console.log("No file selected.");
      window.alert("No file selected");
    }
    setIsLoadingText(false);
    fileInputRef.current.value = "";
  };
  let txtContent = (
    <input type="text" value={selectedFile ? selectedFile.name : ""} readOnly />
  );
  if (isLoadingText) {
    txtContent = <Loader />;
  }
  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of data hygiene solution"
      ></HeadingBox>
      <div className="container18">
        <div className="heading_container18">
          <div className="heading_item18">
            <h3>
              <span className="underline">Data Validation</span>
            </h3>
          </div>
        </div>

        <div className="top_container18">
          <div className="item_container18">
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              onClick={() => fileInputRef.current.click()}
              height="48px"
              buttonText="Browse"
            />
          </div>
        </div>
        <div className="middle_container18">
          <div className="item_container_middle18">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={submitHandler}
              height="48px"
              width="300px"
              buttonText="Validate"
            />
          </div>
        </div>
        <div className="bottom_container18">
          <div className="item_container_last18">
            <div className="button_container_18">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                link="/desktop3/desktop15"
                buttonText="< Back"
              />
            </div>
            <div className="button_container_18">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={NavigateToNext}
                //link=
                buttonText="Next >"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop18;
