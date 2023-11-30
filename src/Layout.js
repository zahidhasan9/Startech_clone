import React from "react";
import Cart_page from "./Compoments/Cart_page";

import About from "./Compoments/Middle Page/About_m";
import Banner from "./Compoments/Banner";
import Middle_Page_main from "./Compoments/Middle_Page_main";

function App() {
  return (
    <>
      <div className="bg-gray content ">
        <Cart_page />
        <Banner />
        <Middle_Page_main />
        <About />
      </div>
    </>

  );
}

export default App;
