import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar_copy from './Compoments/Navbar copy';
import Footer from "./Compoments/Footer";
import Login from "./Compoments/Login";
import Layout from './Layout';
import Home from "./l";
import Signup from "./Compoments/SignUp";
function App() {
  return (
    <>
      {/* <div className="bg-gray content "> */}
     <div >
         <Navbar_copy />

        <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
       
        </Routes> 
        
        <Footer />
        {/* <Home></Home> */}
      </div>
    </>

  );
}

export default App;
