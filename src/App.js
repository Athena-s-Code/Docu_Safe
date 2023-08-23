import React from 'react';
import './App.css';
import Home from '../src/component/Home';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import HomePage from './component/Home/HomePage';

function App() {
  return (
  <>
  <Header/>
  <HomePage/>
  {/* <Home /> */}
  <Footer/>
  </>);
}

export default App;
