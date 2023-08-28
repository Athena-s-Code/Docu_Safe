import React from "react";
import PropTypes from "prop-types"; 
import "./CurvedButton.css"; 


function CurvedButton(props) {
  
  const { text, backgroundColor, width, height ,buttonClick } = props;

  return (
    <button
    
      className="curved-button"
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
      onClick={buttonClick}
    >
      <p className="buttonText">{text}</p>
    </button>
  );
}

CurvedButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default CurvedButton;
