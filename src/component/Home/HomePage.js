import React from 'react';
import './HomePage.css'; // Import your CSS file for styling
import { Button } from 'antd';
import { Col, Row } from 'antd';

import imag1 from '../../assets/img.png';
import imag2 from '../../assets/png.png';
import Card from '../UI/Card';

function HomePage() {
  return (
    <>
    {/* <Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
    </Row>
    <Row>
    <Col span={12}>col-12</Col>
    <Col span={12}>col-12</Col>
    </Row> */}

    {/* <Button type="primary">Button</Button> */}
    <Card img={imag2} heading="Docu Safe" text="is a powerful free, open source tool for working with messy data" />
    <div className="home-page">
      <div className="image-container">
        <img src={imag1} alt="Image 1" />
        <button className="image-button">Button 1</button>
      </div>
      <div className="image-container">
        <img src={imag1} alt="Image 2" />
        <button className="image-button">Button 1</button>
      </div>
      <div className="image-container">
        <img src={imag1} alt="Image 3" />
        <button className="image-button">Button 1</button>
      </div>
      <div className="image-container">
        <img src={imag1} alt="Image 4" />
        <button className="image-button">Button 1</button>
      </div>    </div> 

    </>
  );
}

export default HomePage;
