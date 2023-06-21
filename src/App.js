import React from "react";
import { Route,Routes } from 'react-router-dom';
import Sign_Up from './Compoments/Sign up';
import Home from './Home';
function App() {
  return (
    <>
      <Routes>
        < Route exact path="/" element={<Home/>} />
        < Route exact path="/signup" element={<Sign_Up />} />
     </Routes >
    </>

  );
}

export default App;
