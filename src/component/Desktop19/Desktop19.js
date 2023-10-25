import React, { useState, useRef, useEffect } from "react";
import "./Desktop19.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from "../http/Config";
import Loader from "../UI/Loader";
import { BACKEND_URL } from "../http/Constant";

function Desktop19() {
  const [isValidate, setValidate] = useState(false);
  //response
  const [error, setError] = useState();
  const [responseData, setResponseData] = useState("");

  const fileInputRef = useRef(null);

  const GetValidationData = async () => {
    await Client.get("/validator")
      .then((res) => {
        setResponseData(res.data);
        setValidate(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        window.alert(err.message);
      });
    window.alert("Click download button");
  };
  const downloadHandler = () => {
    if (responseData) {
      try {
        window.open(BACKEND_URL + responseData, "_blank");
      } catch (error) {
        window.alert("Error saving response data to excel file:", error);
      }
    } else {
      window.alert("No response data to save as a excel file.");
    }
  };
  //when loading
  useEffect(() => {
    GetValidationData();
  }, []);
  let txtContent = (
    <input
      type="text"
      value={isValidate ? " " : "Validation Complete"}
      readOnly
    />
  );
  if (isValidate) {
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
      <div className="container17">
        <div className="heading_container17">
          <div className="heading_item17">
            <h3>
              <span className="underline">Data validation</span>
            </h3>
          </div>
        </div>
        <div className="top_container17">
          <div className="item_container17 ">
            <p className="colTopic">Verify</p>
          </div>
          <div className="item_container17">
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={{}}
              ref={{}}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              onClick={{}}
              height="48px"
              buttonText="Password"
            />
          </div>
        </div>
        <div className="bottom_container17">
          <div className="item_container_last17">
            <div className="button_container_17">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                link="/desktop3"
                buttonText="View"
              />
            </div>
            <div className="button_container_17">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                onClick={downloadHandler}
                link="#"
                buttonText="Download"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop19;