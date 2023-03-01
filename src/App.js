import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
// import './App.css';
import Footer from "./Compoments/Footer";
import About from "./Compoments/Middle Page/About_m";
import Navbar from './Compoments/Navbar';
import Navbar_copy from './Compoments/Navbar copy';
function App() {
  return (
  <>
   <Navbar_copy/>
  {/* <Navbar/> */}

  <About/>
  <Footer/>
  </>

  );
}

export default App;
