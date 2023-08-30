import React, { useState,useRef } from "react";
import "./Desktop14.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { Client } from '../http/Config';
import Loader from '../UI/Loader';

function Desktop14() {
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading,setIsLoading] = useState(false)
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleUpload = async() => {
    setIsLoading(true)
    if (selectedFile) {
      // const formData = new FormData();
      // formData.append('file', selectedFile);

      const obj = { file: selectedFile };

     await  Client.post('/upload', obj)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('No file selected.');
    }
    setIsLoading(false)
  };


  let content = <input
type="text"
value={selectedFile ? selectedFile.name : ''}
readOnly
/>

if(isLoading){
  content= <Loader/>
}

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
            {/* <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browser"
            /> */}
            <input
              type="file"
              style={{ display: 'none' }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef} // Create a ref to the file input
            />

            <button onClick={() => fileInputRef.current.click()}>Browse</button>
            

            {content}
            
          </div>
          <div className="item_container14">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browse"
            />
          </div>
        </div>
        <div className="middle_container14">
          <div className="item_container_middle14">
          {/* <GradientButton 
                    startGradientColor="rgb(13.16, 168, 10)" // Start color
                    endGradientColor="rgb(0, 196.56, 7.86)" 
                    link="#" 
                    buttonText="Data Classification"
                    height="48px"
                    /> */}
                     <button onClick={handleUpload}>Data Classification</button> 
          </div>
        </div>
        <div className="bottom_container14">
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(255, 229.5, 0)"
            endGradientColor="rgb(196.56, 165.11, 0)"
            link="#"
            buttonText="View"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(0, 56.1, 255)"
            endGradientColor="rgb(0, 90.42, 196.56)"
            link="#"
            buttonText="Edit"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgb(255, 0, 153)"
            endGradientColor="rgb(91, 13, 41.08)"
            link="#"
            buttonText="Share"
            height="48px"
          />
          </div>
          <div className="item_container_last14">
          <GradientButton
            startGradientColor="rgba(209, 39, 252, 1)"
            endGradientColor="rgba(134, 0, 197, 1)"
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
