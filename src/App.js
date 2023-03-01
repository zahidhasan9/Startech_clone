import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Cart_page from "./Compoments/Cart_page";
// import './App.css';
import Footer from "./Compoments/Footer";
import About from "./Compoments/Middle Page/About_m";
import Banner from "./Compoments/Banner";
import Middle_Page_main from "./Compoments/Middle_Page_main";
import Navbar from './Compoments/Navbar';
import Navbar_copy from './Compoments/Navbar copy';
function App() {
  return (
  <>
   <Navbar_copy/>
  {/* <Navbar/> */}
  <Cart_page/>
  <Banner/>
<Middle_Page_main/>
  <About/>
  <Footer/>
  </>

  );
}

export default App;
