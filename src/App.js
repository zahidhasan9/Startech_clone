import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar_copy from './Compoments/Navbar copy';
import Footer from "./Compoments/Footer";
import Login from "./Compoments/Login";
import Layout from './Layout';
import Home from "./l";
import Signup from "./Compoments/SignUp";
import Account_Dash from "./Compoments/Account_Dash";
import LaptopPage from "./Compoments/Products Page/All Laptop/LaptopPage";
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
        <Route path="/account" element={<Account_Dash/>} />
        <Route path="/all-notebook" element={<LaptopPage/>} />
       
        </Routes> 
        
        <Footer />
        {/* <Home></Home> */}
      </div>
    </>

  );
}

export default App;
