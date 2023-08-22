import React from 'react';

import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="content-container">
        
        <div className="text"><h1>Docu Safe</h1>{props.text}</div>
        <img src={props.img} alt="Card Image" />
      </div>
    </div>
  );
}

export default Card;
