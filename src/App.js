import React from "react";
import ProductDetails from "./components/ProductDetails";
import MoreDetails from "./components/MoreDetails";
import Specification from "./components/moredetails/Specification";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="m-[50px]">
        <ProductDetails />
        <MoreDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
