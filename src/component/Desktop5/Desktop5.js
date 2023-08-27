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
      <div className="container">
        <div className="row row1">
          <div className="underline-container">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>
        <div className="column1_row1">
        <GradientButton 
                    startGradientColor="rgb(255, 198.9, 0)" // Start color
                    endGradientColor="rgb(248.32, 255, 171.49)" 
                    link="#" 
                    width="1260px"
                    buttonText="After verifying you can view the file "
                
                    />
           </div>
           <div className="column2">
           <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password" // Optional placeholder text
        className="password-input"
      />
           </div>
        <div className="row row2">
        
        
          <div className="column1">
            
            
              
              <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    buttonText="View"
                    />  
            
          </div>

         

          <div className="column3 ">
            
              
              <GradientButton 
                    startGradientColor="rgb(10, 111, 168)" // Start color
                    endGradientColor="rgb(5, 167, 244)" 
                    link="#" 
                    buttonText="Download"
                    />  
            
            
            
          </div>
          
        </div>
        
           <div className="column1_row1">
        <GradientButton 
                    startGradientColor="rgb(13.16, 168, 10)" // Start color
                    endGradientColor="rgb(0, 196.56, 7.86)" 
                    link="#" 
                    buttonText="Edit"
                    icon={<FontAwesomeIcon icon={faPencilAlt} />} 
                    />
           </div>          
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Desktop5;
