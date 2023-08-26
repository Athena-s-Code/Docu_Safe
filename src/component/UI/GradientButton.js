import React from "react";
import "./GradientButton.css";

function GradientButton({
  startGradientColor,
  endGradientColor,
  link,
  buttonText,
  icon,
  width,
  height,
}) {
  const buttonStyle = {
    background: `linear-gradient(180deg, ${startGradientColor} 0%, ${endGradientColor} 100%)`,
    width: width || "auto", // Set the width to the provided value or 'auto' if not provided
    height: height || "auto", // Set the height to the provided value or 'auto' if not provided
  };
  const buttonClass = `gradient-button ${width ? "custom-width" : ""}`;

  return (
    <div>
      <a href={link} className="gradient-button" style={buttonStyle}>
        {icon && <span className="button-icon">{icon}</span>}
        <p className="buttonText">{buttonText}</p>
      </a>
    </div>
  );
}

export default GradientButton;
