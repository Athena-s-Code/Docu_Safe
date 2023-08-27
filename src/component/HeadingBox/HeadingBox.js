import React from "react";
import PropTypes from "prop-types"; 
import "./HeadingBox.css"; 

function HeadingBox(props) {
  const { text, image, alt } = props;

  return (
    <div>
        <div className="row hrow">
            <div className="column hcolumn1">
                <p className="hHeading">{text}</p>
            </div>
            <div className="column hcolumn2">
                <img src={require(`../../assets/${image}`)} alt={alt}/>
            </div>
        </div>
    </div>
  );
}

HeadingBox.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default HeadingBox;
