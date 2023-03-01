import React from "react";
import Featured_Category from "./Middle Page/Featured_Category";
import Featured_products from "./Middle Page/Featured_products";

export default function Middle_Page_main() {
  return (
    <>
      
   
      <div>
        <div className="bg-gray content p-tb-30">
          <div className="container">
            <Featured_Category />
            <Featured_products />
          </div>
        </div>
      </div>
    </>
  );
}
