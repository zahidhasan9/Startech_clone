import React from "react";
import { Route,Routes } from 'react-router-dom';
import Sign_Up from './Compoments/Sign up';
import Home from './Home';
import Footer from "./Compoments/Footer";
import Navbar_copy from "./Compoments/Navbar copy";
import Login from "./Compoments/Login";
function App() {
  return (
    <>
    <Navbar_copy/>
      <Routes>
        < Route exact path="/" element={<Home/>} />
        < Route exact path="/signup" element={<Sign_Up />} />
        < Route exact path="/login" element={<Login/>} />
     </Routes >
     <Footer/>
    </>

  );
}

export default App;
