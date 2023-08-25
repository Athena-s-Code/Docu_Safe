import React,{ useState } from "react";
import "./Desktop10.css";
import RadioButton from "../UI/RadioButton";
import CurvedButton from "../UI/CurvedButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";

function Desktop10() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header></Header>
      <HeadingBox text="Data Highlighting & Hiding" image="dataHighliting.png" alt="image of data highliting and hiding"></HeadingBox>
      <div className="container">
        <div className="row row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Highlighting</span>
            </h3>
          </div>
        </div>

        <div className="row row2">
          <div className="column column1">
            <div className="row column1_row1">
              <p className="colTopic">Text file</p>
              <CurvedButton
                text="Browser"
                backgroundColor="#0099ff"
                width="300px"
                height="69px"
              />
            </div>
            <div className="row column1_row3">
              <CurvedButton
                text="View"
                backgroundColor=" #ffee00"
                width="264px"
                height="60px"
              />
            </div>
          </div>

          <div className="column column2">
            <div className="column2Content">
            <div className="radio-container">
              <label>
                <input
                  type="radio"
                  value="PIT Data"
                  checked={selectedOption === "PIT Data"}
                  onChange={handleOptionChange}
                />
                PIT Data
              </label>
              <label>
                <input
                  type="radio"
                  value="Payment Details"
                  checked={selectedOption === "Payment Details"}
                  onChange={handleOptionChange}
                />
                Payement Details
              </label>
              <label>
                <input
                  type="radio"
                  value="Agreements"
                  checked={selectedOption === "Agreements"}
                  onChange={handleOptionChange}
                />
                Agreements
              </label>
            </div>
            <CurvedButton
              text="Highlight"
              backgroundColor="#00ff00"
              width="264px"
              height="60px"
            />
            </div>
          </div>

          <div className="column column3">
            <div className="row column1_row1">
              <p className="colTopic">Image file</p>
              <CurvedButton
                text="Browser"
                backgroundColor="#0099ff"
                width="300px"
                height="69px"
              />
            </div>
            <div className="row column1_row4">
              <CurvedButton
                text="Download"
                backgroundColor="#b82888a8"
                width="264px"
                height="60px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop10;
