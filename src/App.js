import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Cart_page from "./Compoments/Cart_page";
// import './App.css';
import Footer from "./Compoments/Footer";
import Navbar_copy from "./Compoments/Navbar copy";
import Login from "./Compoments/Login";
import MegaDeal from "./Compoments/MegaDeal";
function App() {
  return (
  <>
  <div className="bg-gray content ">
   <Navbar_copy/>
  {/* <Navbar/> */}
  <Cart_page/>
  <Banner/>
<Middle_Page_main/>
  <About/>
  <Footer/>
  </div>
  </>

  );
}

export default App;
