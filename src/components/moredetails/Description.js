import React, { useState, useEffect } from "react";
import AboutDetail from "../AboutDetail";
import axios from "axios";
const Description = () => {
  const url = "https://fakestoreapi.com/products/1";
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  return (
    <div>
      <p>This is description</p>
      <br />
      <p>{product.description}</p>
    </div>
  );
};

export default Description;
