import React from "react";
import "./GradientButton.css";
import { Link } from "react-router-dom";

function GradientButton({
  startGradientColor,
  endGradientColor,
  link,
  buttonText,
  icon,
  width,
  height,
  fontColor,
  onClick, // Add an onClick prop
}) {
  const buttonStyle = {
    background: `linear-gradient(180deg, ${startGradientColor} 0%, ${endGradientColor} 100%)`,
    width: width || "auto",
    height: height || "auto",
    color: fontColor || "#ffffff",
  };
  const buttonClass = `gradient-button ${width ? "custom-width" : ""}`;

  return (
    <div>
      {/* Add an onClick handler to the Link */}
      <Link
        to={link}
        className="gradient-button"
        style={buttonStyle}
        onClick={onClick}
      >
        {icon && <span className="button-icon">{icon}</span>}
        <p className="buttonTextGradient">{buttonText}</p>
      </Link>
    </div>
  );
}

export default GradientButton;
