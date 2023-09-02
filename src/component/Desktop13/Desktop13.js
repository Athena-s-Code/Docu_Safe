import React, { useState, useRef } from 'react';

import './Desktop13.css';

import GradientButton from '../UI/GradientButton';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeadingBox from '../HeadingBox/HeadingBox';
import { Client } from '../http/Config';
import Loader from '../UI/Loader';

function Desktop13() {
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
      const formData = new FormData();
      formData.append('file', selectedFile);

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

// if(isLoading){
//   return(
    
//     <Loader/>
//   )
// }

let content = <input
type="text"
value={selectedFile ? selectedFile.name : ''}
readOnly
/>

if(isLoading){
  content= <Loader/>
}


  return (
    <div>
      <Header></Header>
      <HeadingBox
        text="Data Classification"
        image="dataClassification.png"
        alt="image of data classification"
      ></HeadingBox>
      <div className="container13">
        <div className="heading_container13">
          <div className="heading_item13">
            <h3>
              <span className="underline">Data Classification</span>
            </h3>
          </div>
        </div>

        <div className="top_container13">
          <div className="item_container13 ">
            <p className="colTopic">Text File</p>
          </div>
          <div className="item_container13">
            <p className="colTopic">Image File</p>
          </div>
          <div className="item_container13">
            <input
              type="file"
              style={{ display: 'none' }} // Hide the default file input
              onChange={handleFileChange}
              ref={fileInputRef} // Create a ref to the file input
            />

            <button onClick={() => fileInputRef.current.click()}>Browse</button>
            

            {content}
            <button onClick={handleUpload}>Submit</button>

         
</div>
          <div className="item_container13">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              height="48px"
              buttonText="Browse"
            />
          </div>
        </div>
        <div className="middle_container13">
          <div className="item_container_middle13">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop12/desktop13/desktop14"
              height="48px"
              width="1140px"
              buttonText="Malware Detection"
            />
          </div>
        </div>
        <div className="bottom_container13">
          <div className="item_container_last13">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              height="48px"
              width="160px"
              link="/desktop12/desktop13/desktop14"
              buttonText="Next >>"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Desktop13;