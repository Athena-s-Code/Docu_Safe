import React from 'react';
import './GradientButton.css';

function GradientButton({ startGradientColor,endGradientColor, link, buttonText ,icon,width}) {
  const buttonStyle = {
    background: `linear-gradient(180deg, ${startGradientColor} 0%, ${endGradientColor} 100%)`,
    
  };
  const buttonClass = `gradient-button ${width ? 'custom-width' : ''}`;

  return (
    <div>
    <a href={link} className="gradient-button" style={buttonStyle}>
    {icon && <span className="button-icon">{icon}</span>}  
    <p className='.gradient-button .buttonText'>{buttonText}</p>
    </a>
    </div>
  );
}

export default GradientButton;
