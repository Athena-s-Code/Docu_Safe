import React, { useState } from "react";
import "./Desktop5.css";
import GradientButton from "../UI/GradientButton";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Desktop5() {
  const [selectedOption, setSelectedOption] = useState("");
  const [password, setPassword] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
              className="password-input_desk5"/>
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
                    />  
          </div>        
          <div className="item_container_middle5">
              <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    height="48px"
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
      <Footer></Footer>
    </div>
  );
}
export default Desktop5;
